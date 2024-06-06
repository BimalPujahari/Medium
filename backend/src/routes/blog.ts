import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'
export const blogRouter = new Hono<{
Bindings: {
DATABASE_URL: string,
JWT_SECRET: string,
},
Variables:{
userId: string,
}
}>();

blogRouter.use('/*', async (c, next) => {
const header=c.req.header("authorization") || "";
const token=header.split(" ")[1];

const response=await verify(token,c.env.JWT_SECRET);
if(response.id){
//@ts-ignore
c.set("userId",response.id);
await next();
}
else{
c.status(401);
return c.json({ error: "unauthorized" });
}
})


//to get all the blogs
blogRouter.get('/bulk', async (c) => {
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL	,
}).$extends(withAccelerate());
const posts = await prisma.post.findMany({
select:{
          content:true,
          title:true,
          id:true,
          author:{
                    select:{
                              name:true
                    }
          }
}
});

return c.json(posts);

})


//to get a single blog
blogRouter.get('/:id', async (c) => {
const id = c.req.param('id');
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL	,
}).$extends(withAccelerate());

const post = await prisma.post.findUnique({
where: {
id
},
select:{
          title:true,
          content:true,
          id:true,
          author:{
                    select:{
                              name:true
                    }
          }
}
});

return c.json(post);
})





//to create a blog
blogRouter.post('/', async (c) => {
const userId = c.get('userId');
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL	,
}).$extends(withAccelerate());

const body = await c.req.json();
const post = await prisma.post.create({
data: {
title: body.title,
content: body.content,
authorId: userId
}
});
return c.json({
id: post.id
});
})

//to update a blog
blogRouter.put('/', async (c) => {
// const userId = c.get('userId');
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL	,
}).$extends(withAccelerate());

const body = await c.req.json();
prisma.post.update({
where: {
id: body.id,
// authorId: userId,
},
data: {
title: body.title,
content: body.content
}
});

return c.text('updated post');
});
const express=require("express")
const router=express.Router()
const Blog=require('../models/blog')

router.get('/',async(req,res)=>{
    try {
        const blogs= await Blog.find()
        res.json(blogs)
    } catch (err) {
        res.send('Error '+err)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const blog= await Blog.findById(req.params.id)
        res.json(blog)
    } catch (err) {
        res.send('Error '+err)
    }
})

router.post('/',async(req,res)=>{
    const blog=new Blog({
        title:req.body.title,
        category:req.body.category,
        content:req.body.content
    })
    try {
        const newBlog=await blog.save()
        res.json(newBlog)
    } catch (err) {
        res.send('Error' +err)
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const blog=await Blog.findById(req.params.id)
        blog.title=req.body.title
        blog.category=req.body.category
        blog.content=req.body.content
        const newBlog=await blog.save()
        res.send(newBlog)
    } catch (err) {
        res.send('Error'+err)
    }
})

router.put('/likes/:id',async(req,res)=>{
    try {
        const blog=await Blog.findById(req.params.id)
        blog.likes+=1
        const newBlog=await blog.save()
        res.send(newBlog)
    } catch (err) {
        res.send('Error'+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.send("Blog Deleted Successfully")
    } catch (error) {
        
    }
})

module.exports=router;
const express=require('express');
const authorsRouter=express.Router();
function router2(nav){
var authors=[
    {
        title:'Joseph Barbera',
        author:'Tom and Jerry',
        genre:'Cartoon',
        img:"tom.jpg"
    },
    {
        title:'J K Rowling',
        author:'Harry Potter',
        genre:'Fantasy',
        img:"harry.jpg"
    },
    {
        title:'Paulo Coelho',
        author:'Alchemist',
        genre:'novel',
        img:"alchemist.jpg"
    }

]





authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,title:'Library',authors
    });
});



authorsRouter.get('/:id',function(req,res){
    const id=req.params.id
    res.render('author',{
        nav,
        title:'Library',
        author:authors[id]
    })
})
return authorsRouter;
}
module.exports=router2;

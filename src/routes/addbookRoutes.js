// const express=require('express');
// const addbookRouter=express.Router();
// function router5(nav){






// addbookRouter.get('/',function(req,res){
//     res.render("addbook",
//     {
//         nav,title:'Library'
//     });
// });




// return addbookRouter;
// }
// module.exports=router5;


const express=require('express');
const addbookRouter=express.Router();
const Bookdata=require('../model/bookdata')
function router5(nav){
    addbookRouter.get('/',function(req,res){
        res.render('addbook',{
            nav,title:'Library'
        })
    })
    addbookRouter.post('/add',function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }
       var book= Bookdata(item);
       book.save();
       res.redirect('/books');
    });
   
        
        // addbookRouter.get('/delete/:id',function(req,res){
        //     const id=req.params.id;
        //     Bookdata.findOne({_id:id})
        //     .then(function(book){
        //         res.render('deletebook',{
        //             nav,title:'Library',book
        //         });
        //         })
    
        //     });
        addbookRouter.get('/delete/:id',function(req,res){
            const id=req.params.id;
            Bookdata.deleteOne({_id:id})
            .then(function(book){
                res.render('',{
                    nav,title:'Library',book
                });
                res.redirect('/books');
                })

    
            });
        
    return addbookRouter;
}
module.exports=router5;

// const express=require('express');
// const loginRouter=express.Router();
// function router3(nav){






// loginRouter.get('/',function(req,res){
//     res.render("login",
//     {
//         nav,title:'Library'
//     });
// });




// return loginRouter;
// }
// module.exports=router3;
const express=require('express');
const loginRouter=express.Router();
const Logindata=require('../model/logindata')
function router3(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav,title:'Library'
        })
    })
    loginRouter.post('/add',function(req,res){
        var item={
            email:req.body.email,
            password:req.body.password,
            
        }
       var login= Logindata(item);
       login.save();
       res.redirect('/books');
    });
    return loginRouter;
}
module.exports=router3;


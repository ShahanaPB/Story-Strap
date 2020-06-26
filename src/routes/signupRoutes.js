// const express=require('express');
// const signupRouter=express.Router();
// function router4(nav){






// signupRouter.get('/',function(req,res){
//     res.render("signup",
//     {
//         nav,title:'Library'
//     });
// });




// return signupRouter;
// }
// module.exports=router4;
const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/signupdata')
function router4(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,title:'Library'
        })
    })
    signupRouter.post('/add',function(req,res){
        var item={
            

            firstname:req.body.firstname,
            lastname:req.body.lastname,
            dob:req.body.dob,
            male:req.body.male,
            female:req.body.female,
            other:req.body.other,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            city:req.body.city,
            state:req.body.state
            

        
            
        }
       var signup= Signupdata(item);
       signup.save();
       res.redirect('/login');
    });
    return signupRouter;
}
module.exports=router4;

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;
const SignupSchema=new Schema({
    firstname:String,
    lastname:String,
    dob:Date,
    male:String,
    female:String,
    Other:String,
    email:String,
    password:String,
    mobile:Number,
    city:String,
    State:String
    
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;
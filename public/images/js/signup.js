$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});


$('#bar').hide();
function showbar()
{
    $('#bar').show();
}


birthday.max = new Date().toISOString().split("T")[0];

//REAL CODE STARTS HERE
function validatemobile()
{
    var mobile=document.getElementById("mobile");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var confirmpassword=document.getElementById("confirmpassword");

    var erroremail=document.getElementById("erroremail");
    var errormobile=document.getElementById("errormobile");
    var errorpassword=document.getElementById("errorpassword");
    var errorconfirmpassword=document.getElementById("errorconfirmpassword");
    var a=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var b=/^([\w\.\-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
   var c=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if((mobile.value.match(a)))
    {
        if(email.value.match(b))
        {
               if(password.value.match(c))  
               {
                   if(password.value==confirmpassword.value)
                    {
                         window.open("/login.ejs");
                    }
                    else
                    {
                        errorconfirmpassword.innerHTML="Passwords doesn't match !!";
                        errorconfirmpassword.style.color="red";
                        window.stop(); 
                    }   
                }
                else
                {
                    errorpassword.innerHTML="Please enter a valid password !!";
                     errorpassword.style.color="red";
                     window.stop();
                }        
        }
        else
        {
            erroremail.innerHTML="Please enter a valid e-mail address!!";
            erroremail.style.color="red";
            window.stop();
        }
    }
    else
    {
        errormobile.innerHTML="Please enter a valid mobile number!!";
        errormobile.style.color="red";
        window.stop();
    }

}


$(document).ready(function() {
    $(document).on('submit', '#my-form', function() {
      // do your things
      return false;
     });
});
function myfunctionmobile()
{
    errormobile.innerHTML="";
}
function myfunctionemail()
{
    erroremail.innerHTML="";
}
function myfunctionpassword()
{
    errorpassword.innerHTML="";
}
function myfunctionconfirmpassword()
{
    errorconfirmpassword.innerHTML="";
}
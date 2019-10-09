    $("form.input").submit(function(validate){
      var firstname =document.getElementById("stylistfirstname").value;
      var lastname =document.getElementById("stylistlastname").value;
      var email=document.getElementById("stylistemail").value;
        var password =document.getElementById("Yourpassword").value;
  
        // if (username == ""){
        //   alert("please enter username");
        //   formLogin.username.focus();
        //   return false;
        // }
        // if (password == ""){
        //   alert("Please input password!")
        //   formLogin.password.focus();
        //   return false;
        // }
        if (firstname =="ben" && password =="123")
    {      (lastname == "ben" && password =="123")
           (email == "ben@gmail.com" && password =="123")
          // alert("Login successful");
          window.location.href ="stylistsignup.html";
          return false;
          $('.content').hide();
          $('.message').show();
        }
          else{
            // alert("Login failed! enter right  username and password.")
            $('.message').show();
            event.preventDefault();
          }
        });
    });
  
$(document).ready(function(){
  $("form.input").submit(function(validate){
    var username =document.getElementById("username").value;
      var password =document.getElementById("password").value;

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
      if (username =="kash" && password =="123"){
        // alert("Login successful");
        window.location.href ="index.html";
        return false;
        $('.content').hide();
        $('.message').show();
      }
        else{
          // alert("Login failed! enter right  username and password.")var stylistDashboard = 'Dashboard';

localStorage.setItem('stylistDashboard', stylistDashboard);


          $('.message').show();
          event.preventDefault();
        }
      });
  });

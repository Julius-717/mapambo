
$(document).ready(function () {
        $("form.input").submit(function (validate) {
                var fname = document.getElementById("fname").value;
                var lname = document.getElementById("lname").value;
                var pnumber = document.getElementById("pnumber").value;
                var email = document.getElementById("email").value;
                if (fname == "Kash" && lname == "Peach" && pnumber == "123" && email == "kashpeach@gmail.com") 
                if (fname == "Phyllis" && lname == "Wangari" && pnumber == "123" && email == "phylliswangari@gmail.com")
                if (fname == "Wanjiku" && lname == "Karanja" && pnumber == "123" && email == "wanjikukaranja@gmail.com")
                if (fname == "Brian" && lname == "Mwenda" && pnumber == "123" && email == "brianmwenda@gmail.com")
                if (fname == "Peter" && lname == "Murutu" && pnumber == "123" && email == "petermurutu@gmail.com"){
                        // window.location.href = "index.html";
                        return false;
                        $('.content').hide();
                        $('.message').show();
                }
         alert("Welcome to your profile" + " " +  fname + " " + lname +" " + "your number is" + " "+ pnumber + "your email is" +" " + email  );
        });

        // else {
        //                 $('.message').show();
        //                 event.preventDefault()
        //         }
                
        // else {
        //                 //   alert("Login failed! enter right  username and password.")var stylistDashboard = 'Dashboard';

        //         localStorage.setItem('stylistDashboard', stylistDashboard);


        //                   $('.message').show();
        //                   event.preventDefault();
        //                 }
        });


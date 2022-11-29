const inpt = document.querySelectorAll("input");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const namel = document.getElementById("username");
const psdl = document.getElementById("password");
const uname2 = document.getElementById("uname2")
const psds = document.getElementById("password2");
const psds2 = document.getElementById("password3");
const email = document.getElementById("Email");
const check = document.getElementById("#t&c2");
const p = document.querySelectorAll("tc");
var form1 = document.querySelectorAll("signin");
// const signup = document.querySelectorAll("signup");


inpt.forEach(inp => {
    inp.addEventListener("focus", () => {

        inp.classList.add("active");
    });

    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active")
    });
});
   
toggle_btn.forEach(btn => {

    btn.addEventListener("click", () => {
        main.classList.toggle("mode");
       
         document.getElementById("1").classList.toggle( 'mode');
         document.getElementById("2").classList.toggle( 'mode');

        });
});
toggle_btn.forEach(btn => {

   
       
         document.getElementById("2").classList.toggle( 'mode');
        // document.querySelectorAll("normal").classList.toggle('mode');
        });



function validate() {






    // var email2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
                                           
    // var name = /\d+$/g;

    if (namel.value == "") {
        document.getElementById("un").innerHTML = "* Please enter username ."
        namel.focus();
        return false;
    }

    if (psdl.value == "") {
        document.getElementById("pd").innerHTML = "*Please enter your password properly.";
        psdl.focus();
        return false;
    }
    if (psdl.value.length < 4) {
        //    document.getElementById("pd").value=null;
        document.getElementById("pd").innerHTML = "* Password must be includes A-Z,a-z,0-9,+,@,& .";
        psdl.focus();
        return false;
    }
   

    
 


    return true;



}

//  form1.onclick = window.open('/finalpage.html');

function validatesignup() {

   
   
   
    var email2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    // var regPhone=/^\d{10}$/;                                        
    var name = /\d+$/g;


    if (uname2.value == ""||name.test(uname2)) {
       
    document.getElementById("nam").innerHTML='* Please enter username';
    uname2.focus();
   
        return false;
    }
    if (email.value=="" || email2.test(email)) {
        document.getElementById("eml").innerHTML="* Please enter your email properly.";
        email.focus();
        return false;
    }

    if (psds.value == "") {
        document.getElementById("npsd").innerHTML = "* Please enter your password properly.";
        psds.focus();
        return false;
    }
    if (psds.value.length < 4) {
        //    document.getElementById("pd").value=null;
        document.getElementById("npsd").innerHTML = "* Password must be includes A-Z,a-z,0-9,+,@,& .";
        psds.focus();
        return false;
    }
    if (psds2.value == "") {
        document.getElementById("npsd2").innerHTML = "* Please enter your password properly.";
        psds2.focus();
        return false;
    }
    if (psds2.value.length < 4) {
        //    document.getElementById("pd").value=null;
        document.getElementById("npsd2").innerHTML = "* Password must be includes A-Z,a-z,0-9,+,@,& .";
        psds2.focus();
        return false;
    }
    if (psds.value!=psds2.value) {
        //    document.getElementById("pd").value=null;
        document.getElementById("npsd2").innerHTML = "* Password must be same .";
        psds2.focus();
        return false;
    }
    if(check.value==false){
        document.getElementById("p").setAttribute("color","red");
    }
   



    return false;

}




















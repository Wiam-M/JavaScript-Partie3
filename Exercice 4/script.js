function verificationValue(){
    let passeword1 = document.getElementById("password").value;
    let passeword2 = document.getElementById("confirm").value;
        if ( passeword1 == passeword2 && passeword1=="") {
        document.getElementById("password").style.border = "1px solid green";
        document.getElementById("confirm").style.border = "1px solid green";
        // document.getElementsByTagName("input")[0].style.border =document.getElementsByTagName("input")[1].style.border = "2px solid green"
        }
        else {
            document.getElementById("password").style.border = document.getElementById("confirm").style.border = "2px solid red";
        }
}
        
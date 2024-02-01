const form=document.querySelector("form");

const name=form.querySelector("#name");
const email=form.querySelector("#email");
const password=form.querySelector("#password");

form.addEventListener("submit",function(e){
    e.preventDefault()

    //  console.log(name.value);
    //  console.log(email.value);
    //  console.log(password.value);

    const userIn={
        name:name.value,
        email:email.value,
        password:password.value
    }
    console.log(userIn);

    name.value="";
    email.value="";
    password.value="";
   
})
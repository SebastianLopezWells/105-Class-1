//creat the constructor
class User {
    constructor(fname, lname, age, address, email, password, payMethod) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.email = email;
        this.password = password;
        this.payMethod = payMethod;
    }
}
//create the registration fucntion
function register(){
    
    //get values from the imputs
    /*
    let name = document.getElementById("txtName").value;
    let lname = document.getElementById("txtLastName").value;
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;
    let payMethod = document.getElementById("txtPayment").value;*/
    let name = $("#txtName").val();
    let lname = $("#txtLastName").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let payMethod = $("#txtPayment").val();

    //create the obj
    console.log(name,lname, age, address, email,password,payMethod);
    let user = new User(name,lname, age, address,email,password,payMethod);
    //display the users on the console
    console.log(user);
    //
}

function init(){
    //hook events

}

window.onload = init;
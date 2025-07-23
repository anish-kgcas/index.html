/*global scope:
variable declared outside any function or block are in the global scope .
they are accessble anywhere in the script
*/
/*function say(){
    let name ="javascript";
    console.log("hello global scope");
    console.log("within"+name);
}
say()
*/


//block scope :

/*
function Voting(age){
    if (age >=18){
        var iscloudy= true; // local variable
        console.log("you are eligible to vote");
        
    }else {
        var iscloudy=false;
        console.log("you are not eligible to vote");
        
    }
    console.log(iscloudy);
}
Voting(29);
*/

/*callback function

function text(){
    console.log("message");

}
function send(callback){
    console.log("send message");
    setInterval(callback,2000);
}
send(text);
*/


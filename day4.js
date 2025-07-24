/*/array
let number=[1,2,"three",true];
let names=new Array("john","james");
console.log(number[2]);
console.log(names.length);
*/

/*/filter()-it filtered the result arguments
let number=[1,2,3,4,5];
let result=number.filter(result => number[1]);
console.log(result);
*/

/*/slice-delete the element based on index value
let number=[1,2,3,4,5];
number.splice(1,2,"hai");
console.log(number)
*/

/*/object
let details={
    name:"js",
    totalmark:"90"
    //nested obj
    subject:{
        dbms:"90"
        java:"95"
    }
    Aug:function(){
        let sum=this.subject.dbms+this.subject.java;
        return sum;
    }
}
console.log(details.totalmark)
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());
*/

//Astrid info
//let studentFirstName="Astrid";
//let studentLastName="Batres-Guerrero";
//let studentAge=25;
//let studentIsActive=true;
//arrays []
//objects literal {}
//let student1 = {
    //attr:value,
  //  firstName: "Astrid",
    //lastName: "Batres-Guerrero",
    //age: 25,
    //isActive:true
//}

//let student2 ={
    //firstName:"Anthony",
    //lastName: "Lane",
    //age:22,
    //isActive:true
//}

//let student3 ={
    //firstName:"Ben",
    //lastName: "Vance",
    //age: 25,
    //isActive:false,
    //hobbies:["listen to Music", "Read", "Play Zelda"],
    //address:{
        //street: "Palm street",
        //zip:"22769",
        //number: "262-k"
    //}
//}

//let Students=[
  //  {
    //attr:value,
   //firstName: "Astrid",
   //lastName: "Batres-Guerrero",
  // age: 25,
   //isActive:true
//},
//{
  //  firstName:"Anthony",
  //  lastName: "Lane",
    //age:22,
    //isActive:true
//},
//{
  //  firstName:"Ben",
    //lastName: "Vance",
    //age: 25,
    //isActive:false,
  //  hobbies:["listen to Music", //"Read", "Play Zelda"],
  //  address:{
    //    street: "Palm street",
      //  zip:"22769",
        //number: "262-k"
    //}
//}];

//console.log(students[0].firstName);
//travel the array
//function displayStudent(){

//let tmp="";
  //  for(let i=0;i<students.length;i++)//{   
       // tmp +=` <li>${students[i].//firstName}</li>`;    
      //  console.log(tmp);
        
      //  document.getElementById("students").innerHTML=tmp;
        //length allows you to use entire array 
        //console.log(students[i]);
  //  }
//}
//displayStudent();


//console.log(student1.firstName);
//console.log(student2["lastName"]);
//console.log(student3.hobbies[1]);//display read
//console.log(student3.address.zip);//display the zip code
//console.log(student3["address"]["zip"]);// different way to display

//practice 
//let Client1 = {
   // firstName: "John",
  //  lastName: "Doe",
  //  Subscription: "Premium",
   // isActive: "True",
    //Credits:20,
//}

//console.log(Client1);

//object constructor(function)

//these are local wars

    function Students(fname,lname,age,isActive){
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
        this.isActive=isActive;
    }

let student1=new Students("Astrid","Batres-Guerrero", 25, true);
let student2=new Students("Alexis", "Aldrete", 25, true);

console.log(student1,student2);

function Cookies(Brand,Number,Type){
    this.Brand=Brand,
    this.Number=Number,
    this.type=type
}

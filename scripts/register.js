let petsSalon = {
        name: "The Fashion Pet",
        adress:{
            street:"Ave University",
            number: "787",
            zip: "23456"
        },
        hours: {
            open:"9:00 a.m.",
            close: "8:00 pm."
        },   
     pets: []
        
}

let c=0; //this is a counter var

function Pet(Name,age,breed,gender, service,ownername,contactphone){
    this.name=Name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownername;
    this.phone=contactphone;
    this.id=c++;//increase the var 1 everytime that is used
}
let inputName=document.getElementById("txtname");
let inputAge=document.getElementById("txtage");
let inputGender=document.getElementById("txtgender");
let inputBreed=document.getElementById("txtbreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtowname");
let inputphone=document.getElementById("txtphone");

function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    if(aPet.name.length==0){
        //if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid name");
    }
        if (aPet.service.length==0){
            valid=false;
            console.error("Invalid name");
        }
        if (aPet.phone.length==0){
            valid=false;
            console.error("Invalid name");
        }
       return valid;
}

function register(){
let thePet = new Pet(inputName.value, inputAge.value, inputBreed.value, inputGender.value, inputService.value, inputOwner.value,inputphone.value);
console.log(thePet);
if (isValid(thePet)){
    petsSalon.pets.push(thePet);
    displaytable();
    clearInputs();}
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputGender.value="";
    inputService.value="";
    inputOwner.value="";
    inputphone.value="";
}

function deletePet(petId){
    //need an id in the pet constructor
    //need a delete button in html
    console.log("Deleting" + petId);
    let deleteIndex;
    //in this function
     //travel the array (for loop)
    for (let i=0; i<petsSalon.pets.length;i++){
        let pet =petsSalon.pets[i];
        if(petId==pet.id){
         //find the id (if)
     //get teh position in the array (store in a var)   
            deleteIndex=i;
            console.log("I found it in position:" + i)
        }
    }
    //remove from array(splice())
    petsSalon.pets.splice(deleteIndex,1);
    //remove from the html (remove())
    document.getElementById(petId).remove();
    //display to the user a message
}

function searchPet(){
    let searchString= dcoument.getElementById("txtSearch").value;
    console.log("Searching" + searchString);
    for (let i=0; i<petsSalon.pets.length;i++){
        let pet =petsSalon.pets[i];
        if(searchString.toLowerCase() === pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("highlight");
        }else{
            document.getElementById(pet.id).classList.remove("highlight");
        }
    
}
}

let scooby=new Pet("Scooby",50,"Dane","Male","Grooming","Shaggy", 555-555-5555);
let scrappy =new Pet("Scrappy", 50, "Mixed","Male", "Grooming", "Shaggy", 555-555-5555);
let max=new Pet("Max", 56, "Husky", "Male","Grooming","Shaggy", 555-555-5555);
petsSalon.pets.push(scooby,scrappy);
displaytable();
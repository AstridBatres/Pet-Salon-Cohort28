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
function dispalyPetsNames(){
    let tmp="";
    for(let i=0;i<pets.length;i++){
        tmp +=`<li>${pets[i].name}</li>`;
         console.log(tmp);    
         
         document.getElementById("pets").innerHTML=tmp;
             
    }
    console.log(pets[i]);
    alert('Registered pets are' + tmp);
}


 function displayCards(){

function Pet(Name,age,breed,gender, service,ownername,contactphone){
    this.name=Name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownername;
    this.phone=contactphone;
}
let inputName=document.getElementById("txtname");
let inputAge=document.getElementById("txtage");
let inputGender=document.getElementById("txtgender");
let inputBreed=document.getElementById("txtbreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtownname");
let inputphone=document.getElementById("txtphone");

function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    if(aPet.petName.length==0){
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
petsSalon.pets.push(thePet);
if (isValid(thePet)==true){
    petsSalon.pets.push(thePet);
}
}
clearInputs();}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputGender.value="";
    inputService.value="";
    inputOwner.value="";
    inputphone.value="";
}


let scooby=new Pet("Scooby",50,"Dane","Male","Grooming","Shaggy", 555-555-555,);
let scrappy =new Pet("Scrappy", 50, "Mixed", "Grooming", "Shaggy", 555-555-555);
let max=new Pet("Max", 56, "Husky", "Grooming","Shaggy", 555-555-555);
petsSalon.push(scooby,scrappy);
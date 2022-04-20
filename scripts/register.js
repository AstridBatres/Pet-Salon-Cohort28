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
        }
}
console.log(petsSalon);

    let pets= [
            {
            name:"Scooby",
            age: 50,
            breed: "Dane",
            gender: "Male",
            service: "Grooming",
            ownerinfo:{
                ownersname: "Shaggy",
                phone: 555-555-555},
            },
            {
            name:"Scappy",
            age: 40,
            breed: "Mixed",
            gender: "Male",
            service: "Grooming",
            ownerinfo:{
                ownersname: "Shaggy",
                phone: 555-555-555},  
            },
            {
                name:"Test",
                age: 99,
                breed: "Test",
                gender: "Test",
                service: "Test",
                ownerinfo:{
                    ownersname: "Test",
                    phone: 555-555-555}, 
            },
            {
                name:"Max",
                age: 56,
                breed: "Husky",
                gender: "Male",
                service: "Grooming",
                ownerinfo:{
                    ownersname: "Train",
                    phone: 555-555-555},
            }
        ];

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


//displaypets();

//function pet(Name,age,breed,service,ownername,contactphone){
    //this.name=Name;
    //this.age=age;
    //this.breed=breed;
    //this.service=service;
    //this.ownername=ownername;
    //this.contactphone=contactphone
//}
//let inputName=document.getElementById("txtname");
//let inputAge=document.getElementById("txtage");
//let inputBreed=document.getElementById("txtbreed");
//let inputService=document.getElementById("Grooming");
//let inputownname=document.getElementById("txttownname");
//let inputContactphone=document.getElementById("txtphone")

//function register(){
//let ThePet = new(inputName.value, inputAge.//value, inputBreed.value, inputService.value, //inputownname.value)

//}


//let scooby=new pet("Scooby",50,"Dane","Male",//"Grooming","Shaggy", 555-555-555,);

//let scrappy =new pet("Scrappy", 50, "Mixed", //"Grooming", "Shaggy", 555-555-555);

//let max=new pet("Max", 56, "Husky", //"Grooming","Shaggy", 555-555-555);

//console.log(scooby,scrappy,max);


//display the pets in list items
//function displaypet(){
   // let tmp="";//clear the field
  //  for(let i=o;i<petsSalon.pets.length;i++){let pet = petSalon.pets[i];//get each pet
    //    tmp+=`<li>${pet.name}--- ${pet.age}</li>`;
     //   console.log(tmp)
   // }
   // document.getElementById("pets").innerHTML=tmp   
//}

//display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petsSalon.pets.length;i++){
        let pet = petsSalon.pets[i];
        tmp+=`
        <div id="${pet.id}" class="pet">
            <div class="pet-header">
            <h4>${pet.name}</h4>
                <button onclick="deletePet(${pet.id});"> 🗑️ </button> 
                </div>
            <label>${pet.age}</label>
            <label>${pet.breed}</label>
            <label>${pet.gender}</label>
            <label>${pet.service}</label>
            <label>${pet.owner}</label>
            <label>${pet.phone}</label>
           
        </div>    
        `;

        document.getElementById("pets").innerHTML=tmp
    }
}
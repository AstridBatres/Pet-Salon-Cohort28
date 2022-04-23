//display the pets in list items
function displaypet(){
    let tmp="";//clear the field
    for(let i=o;i<petsSalon.pets.length;i++){let pet = petSalon.pets[i];//get each pet
        tmp+=`<li>${pet.name}--- ${pet.age}</li>`;
        console.log(tmp)
    }
    document.getElementById("pets").innerHTML=tmp   
}

//display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp=`
        <div class="pet">
            <h4>${pet.name}</h4>
            <label>${pet.age}</label>
        </div>    
        `;

        document.getElementById("pets").innerHTML=tmp
    }
}
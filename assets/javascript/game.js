let teamone_shoot = document.querySelector ('#teamone-shoot-button');
let teamone_numshots = document.querySelector ('#teamone_numshots');   

teamone_shoot.addEventListener ("click", function () {
    
let shots1= parseInt(teamone_numshots.innerHTML) + 1;
    teamone_numshots.innerHTML = shots1;
    console.log(shots1);
    let random = Math.random();
if (random > .5) {
    let goals1 = parseInt(teamone_numgoals.innerHTML) + 1;
    teamone_numgoals.innerHTML = goals1
} 
     
})


let teamtwo_shoot =  document.querySelector ('#teamtwo-shoot-button');
let teamtwo_numshots = document.querySelector ('#teamtwo_numshots');

teamtwo_shoot.addEventListener ("click", function () {
    
    let shots2= parseInt(teamtwo_numshots.innerHTML) + 1;
        teamtwo_numshots.innerHTML = shots2;
        console.log(shots2);
        let random = Math.random();
    if (random > .5) {
        let goals2 = parseInt(teamtwo_numgoals.innerHTML) + 1;
        teamtwo_numgoals.innerHTML = goals2
    } 
         
})
    





let reset_button = document.querySelector ('#reset-button');
let nresets = document.querySelector ('#num_resets');
let num_resets = 0;
console.log(nresets)

reset_button.addEventListener ("click", function () {
    num_resets += 1;
    nresets.innerHTML = num_resets;
    teamone_numshots.innerHTML = 0;
    teamtwo_numshots.innerHTML = 0;
    teamone_numgoals.innerHTML = 0;
    teamtwo_numgoals.innerHTML = 0;
    
})

    
    


 

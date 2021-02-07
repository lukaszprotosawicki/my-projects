const level_character = document.getElementById('level') ;
const melee_skill_character = document.getElementById('melee_skill');
const weapon_attack_character = document.getElementById('weapon_atk');
const melee_ring_item = document.getElementById('melee_ring');
const shield_item = document.getElementById('shield');
const melee_sword0_item = document.getElementById('melee_sword0');
const melee_sword1_item = document.getElementById('melee_sword1');
const melee_sword3_item = document.getElementById('melee_sword3');
const submit = document.getElementById('submit');
const best_hit = document.getElementById('best_hit');
const inputs = document.querySelectorAll('.items');
const addskill = document.getElementById('add_skill')
const medium_hit = document.getElementById('medium_hit')
const min_hit = document.getElementById('min_hit')

var radioValues = [];

level = 0.6;
melee_skill = 1.4;
weapon_attack = 2.2;

function addition (a, b, c) { //dodawanie
    return a + b + c;
}

function score_hit(value, decimal) {
    let o1 = Number(level_character.value);
    let o2 = Number(melee_skill_character.value);
    let o3 = Number(weapon_attack_character.value);
    let o4 = Number(addskill.innerHTML);

    if (o1 <= 0 || o2 <= 0 || o3 <= 0) {
        alert ("Wprowadź wartość");
    }else {
        score = ((o1 * level) + ((o2  + o4) * melee_skill) + (o3 * weapon_attack) * 2.5);
        window.document.getElementById("best_hit").innerHTML = score.toFixed(1); 
        score = ((o1 * level) + ((o2  + o4) * melee_skill) + (o3 * weapon_attack) * 1.2);
        window.document.getElementById("medium_hit").innerHTML = score.toFixed(1); 
        score = ((o1 * level) + ((o2  + o4) * melee_skill) + (o3 * weapon_attack) * 0.2);
        window.document.getElementById("min_hit").innerHTML = score.toFixed(1); 
    }
}



inputs.forEach(input => {
    input.addEventListener('change', e => {
      const element = e.target;
      console.log()
      if (element.checked) {
        if((element.id).includes("melee_sword")) {
            if(radioValues.length > 0) {
                addskill.textContent = Number(addskill.textContent) - Number(radioValues[0].value);
            }
            radioValues = [{
                id: element.id,
                value: element.value
            }]
            addskill.textContent = Number(addskill.textContent) + Number(element.value);
        }else{
            if(element.id == "melee_ring") {
                console.log(`dodam: ${element.value}`)
            }
            addskill.textContent = Number(addskill.textContent) + Number(element.value);
        }
      } else {
        if(element.id == "melee_ring") {
            console.log(`odejme: ${element.value}`)
        }
        addskill.textContent = Number(addskill.textContent) - Number(element.value);
      }
    });
  })
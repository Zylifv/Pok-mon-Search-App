const input = document.getElementById("search-input");
const search = document.getElementById("search-button");
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const pokeInfo = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}";
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const sprite = document.getElementById("sprite");

const currentHp = document.getElementById("hp-current");
const currentAttack = document.getElementById("attack-current");
const currentDefense = document.getElementById("defense-current");
const currentSpAttack = document.getElementById("spattack-current");
const currentSpDefense = document.getElementById("spdefense-current");
const currentSpeed = document.getElementById("speed-current");


async function getData() {
  
  const regex = /[!@#$%^&*()',.?":{}|<>\s]/gi;
  let textInput = input.value.replace(regex,"");
  let inputSearch = textInput.charAt(0).toLowerCase() + textInput.slice(1);
  
  try {
    
   const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputSearch}`);
   const data = await response.json();
    
   sprite.style.display = "block";
    
   pokemonName.innerHTML = `${data.name.toUpperCase()}`;
   pokemonId.innerHTML = `#${data.id}`;
   weight.innerHTML = `Weight: ${data.weight}`;
   height.innerHTML = `Height: ${data.height}`;
   sprite.src = `${data.sprites.front_default}`;
      sprite.onmouseover = function() {
        sprite.src = `${data.sprites.front_shiny}`;
       }
         sprite.onmouseout = function() {
           sprite.src = `${data.sprites.front_default}`;
    }
    
    
    let type1 = `${data.types[0].type.name}`
    let type2Check = `${data.types[1] ? ` ${data.types[1].type.name}` : ""}`
    
    types.innerHTML = type1.toUpperCase() + type2Check.toUpperCase();
    
    console.log(types);
    
    currentHp.innerHTML = `${data.stats[0].base_stat}`;
    currentAttack.innerHTML = `${data.stats[1].base_stat}`;
    currentDefense.innerHTML = `${data.stats[2].base_stat}`;
    currentSpAttack.innerHTML = `${data.stats[3].base_stat}`;
    currentSpDefense.innerHTML = `${data.stats[4].base_stat}`;
    currentSpeed.innerHTML = `${data.stats[5].base_stat}`;
    
    sprite
   
  } catch (error) {
    alert("Pokémon not found, please try again.");
    resetResults();
  }
}


const resetResults = () => {
  
    pokemonName.innerHTML = "";
    pokemonId.innerHTML = "";
    weight.innerHTML = "";
    height.innerHTML = "";
    sprite.style.display = "none";
    currentHp.innerHTML = "";
    currentAttack.innerHTML = "";
    currentDefense.innerHTML = "";
    currentSpAttack.innerHTML = "";
    currentSpDefense.innerHTML = "";
    currentSpeed.innerHTML = "";
};

let cards = document.querySelector(".js-cards");

function displayPokemon(pokemon) {
  // Generate HTML code of the Pokemon types
  let htmlPokemonTypes = ''
  pokemon.types.forEach(type => { htmlPokemonTypes += `<span class="card__type">${type.name}</span>` })

  // Generate HTML code of the Pokemon card
  cards.innerHTML += 
      `      <div class="card">`
    + `        <img src="" alt="" class="card__img">`
    + `        <h2></h2>`
    + `        <div class="card__types"></div>`
    + `        <div class="card__stats">`
    + `          <p>attaque<br><strong class="card__number atk"></strong>`
    + `          <p>défense<br><strong class="card__number def"></strong>`
    + `          <p>vitesse<br><strong class="card__number vit"></strong>`
    + `        </div>`
    + `      </div>`;
}

// Display pokemon cards
function displayAll(data) {
  // Empty the HTML element containing the cards
  cards.innerHTML = '';
  // Display each card in the data
  data.forEach(displayPokemon);
}

// Load Pokemon data and display Pokemon cards
fetch("data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    displayAll(data)
  })
  .catch(console.error);
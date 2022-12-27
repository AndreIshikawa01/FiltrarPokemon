    
    let pokemons = [
  {
    name: 'Bulbasaur',
    type: 'grama',
    image: 'https://cdn.icon-icons.com/icons2/851/PNG/512/bulbasaur_icon-icons.com_67580.png'
    
  },
  {
    name: 'Charmander',
    type: 'fogo',
    image: 'https://cdn.icon-icons.com/icons2/851/PNG/512/charmander_icon-icons.com_67576.png'
  },
  
  {
    name: 'Squirtle',
    type: 'água',
    image: 'https://cdn.icon-icons.com/icons2/851/PNG/512/squirtle_icon-icons.com_67504.png'

  },
  {
    name: 'Eevee',
    type: 'normal',
    image: 'https://cdn.icon-icons.com/icons2/851/PNG/512/eevee_icon-icons.com_67563.png'
  },
  {
    name: 'Snorlax',
    type : 'normal',
    image: 'https://cdn.icon-icons.com/icons2/851/PNG/512/snorlax_icon-icons.com_67505.png'
  },
  {
    name: 'Pikachu',
    type: 'eletrico',
    image: 'https://cdn.icon-icons.com/icons2/851/PNG/512/pikachu_icon-icons.com_67535.png'
  },
    ]

function criarCarta(pokemon) {
  
  return `
 
    <div class="pokemon-card">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.image}" alt="${pokemon.name}" />
      <p>Tipo: ${pokemon.type}</p>
    </div>

 
  `;
}

let cardsHTML = pokemons.map(criarCarta).join('');
let container = document.querySelector('.pokemon-cards');
container.innerHTML = cardsHTML;

let botaoTodos = document.querySelector("#btn-todos");
botaoTodos.addEventListener("click", () => exibirTodos());

function exibirTodos() {
  let cardsHTML = pokemons.map(criarCarta).join('');
  container.innerHTML = cardsHTML;
}
function filtrarPorTipo(tipo) {
    let filtrados = pokemons.filter(pokemon => pokemon.type === tipo);
    let cardsHTML = filtrados.map(criarCarta).join('');
    container.innerHTML = cardsHTML;
  }
  
  let botaoGrama = document.querySelector("#btn-grama");
  botaoGrama.addEventListener("click", () => filtrarPorTipo("grama"));
  
  let botaoFogo = document.querySelector("#btn-fogo");
  botaoFogo.addEventListener("click", () => filtrarPorTipo("fogo"));
  
  let botaoAgua = document.querySelector("#btn-agua");
  botaoAgua.addEventListener("click", () => filtrarPorTipo("água"));
  
  let botaoNormal = document.querySelector("#btn-normal");
  botaoNormal.addEventListener("click", () => filtrarPorTipo("normal"));

  let botaoEletrico = document.querySelector("#btn-eletrico");
  botaoEletrico.addEventListener("click", () => filtrarPorTipo("eletrico"));
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const pokemonName = document.getElementById('pokemon-name')
const pokemonId = document.getElementById('pokemon-id')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const pokemonImg = document.getElementById('pokemon-img')
const types = document.getElementById('types')
const sprite = document.getElementById('sprite')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const specialAttack = document.getElementById('special-attack')
const specialDefense = document.getElementById('special-defense')
const speed = document.getElementById('speed')

const pokemons = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'


const fetchData = async () => {
  try {
    const res = await fetch(pokemons)
    const data = await res.json()
    getPokemonsInfos(data)
  } catch (error) {
    console.log(error)
  }
}

fetchData()

const getPokemonsInfos = (data) => {
  const { results } = data
  
}

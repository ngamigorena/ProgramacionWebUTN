/* 


const personajes = {
    team: "Star Wars Characters",
    characters: [
        {
            name: "Leia Organa",
            height: "150",
            mass: "49",
            hair_color: "brown",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "19BBY",
            species: [],
                "starships": [],
        }
    ]
}

console.log(personajes.team);
console.log(personajes.characters[0].height);
 */

fetch('https://hp-api.herokuapp.com/api/characters/students')
    .then(response => response.json())
    .then(json => {
        for(let i=0; i<json.length; i++){
            if(json[i].house == "Gryffindor"){
                console.log(json[i].name + " es de Gryffindor");
            }
        }
    });


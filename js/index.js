// Vista maestro obtenida a partir de el resultado obtenido de una API (se debe mostrar una imágen, un nombre y otro(s) dato(s))
// ¿Qué es una vista maestro?
// Una vista maestro es un conjunto de tarjetitas (HTML) mostradas con flex (Una cuadrícula con los elementos del fetch)
// APIS RECOMENDADAS
// https://pokeapi.co/
// https://swapi.dev/
// https://rickandmortyapi.com
// https://www.football-data.org/
// https://docs.openaq.org/
// https://www.septastats.com/api
// https://sunrise-sunset.org/api
// https://anapioficeandfire.com/
// https://source.unsplash.com/
// https://randomuser.me/api

let container = document.getElementById("conjunto");
fetch("https://randomuser.me/api?results=100")
  .then((response) => response.json())
  .then((personajes) => {
    // HACEMOS UN CONSOLELOG PARA CONOCER LOS DATOS--------------------------------------------------
    console.log(personajes.results);
    // METEMOS UN TEMPLATE STRING CON EL CÓDIGO QUE DEBERÍA IR EN HTML-------------------------------
    personajes.results.map((personas) => {
      let card = `
        <figure>
        <img id="face" src="${personas.picture.large}" alt="">
        <div id="datos">
            <h1 id="name">
                ${personas.name.title} ${personas.name.first} ${
        personas.name.last
      }
                </h1>
            <p id="gender">
            ${
              personas.gender == "male"
                ? '<img class="simGender" src="img/male-01.svg"></img>'
                : '<img class="simGender" src="img/female-01.svg"></img>'
            }
            ${personas.gender.toUpperCase()}
            </p>
            <p id="city">
                ${
                  personas.location.city
                } ${personas.location.country.toUpperCase()}
            </p>
            <p id="street">
                ${personas.location.street.number} ${
        personas.location.street.name
      }
            </p>
            <div id="contacto">
                <p id="email">
                    ${personas.email}
                </p>
                <p id="cell">
                    ${personas.cell}
                </p>
            </div>
        </div >
      </figure >
            `;
      container.innerHTML += card;
    });

    // AQUÍ DECIMOS QUE EL INNERHTML SEA ADEMÁS DE LO QUE YA ES QUE AÑADA LA CARD--------------------------------
    // ${((personas.gender)=="male")?<img class="simGender" src=#></img>:<img class="simGender" src=#></img>}

    // let face = document.createElement("img");
    // Así se crea un div, el problema es que cuando tienes muchos divs dentro de divs, se complica mucho.
    // Por ello es mejor que sea un template string
    // face.src = personajes.results[0].picture.large;
    // console.log(face.src)
  });

// <h1 id="name">${personajes.results[0].name.title} ${personajes.results[0].name.first} ${personajes.results[0].name.last}</h1>
// <p id="gener">${personajes.results[0].gender.toUpperCase()} //<img src="${femenino ? "url femenino" : "url masculino"}

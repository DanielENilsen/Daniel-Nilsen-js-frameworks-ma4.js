
import React, { useState, useEffect } from "react";


export default function RecipeList () { 
    const [ApiIndex, recipes] = useState([]);


    useEffect(() =>  {  
    fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/')
        .then(response => response.json())
        .then(json => recipes(json.results))
        .catch(error => console.log(error));
    }, []);
    return (
        <div>
          {ApiIndex.map(character => (
                <article className = 'card'key={character.id}>
                    <h3>{character.title}</h3>
                    <p>{character.ingredients}</p>
                    <img src={character.thumbnail} />
                    <a href={character.href}>Link</a>
                </article>
            ))}
        </div>
    );

}

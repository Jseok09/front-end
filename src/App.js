import react from 'react';

function Game({ name, picture }) {
  return (
    <div>
      <h2>This Game name is {name} </h2>
      <img src={picture} />
    </div>
  );
}

const OnlineGame = [
{
  name: 'LEAGUE OF LEGENDS' ,
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fFQTiWgfjrHPWN7LH7bj7wHaDv%26pid%3DApi&f=1',
},
{
  name: 'Maplestory',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FhGCQBQKDOy_fLojHJgn4gHaDB%26pid%3DApi&f=1',
},
{
  name: 'DUNGEON&FIGHTER',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y9ymsZPgJ9dUHCMgeMljXQHaEK%26pid%3DApi&f=1',
},
{
  name: 'Lost Ark',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fCSJGMiuj3ApLW-AsjEH5gHaEK%26pid%3DApi&f=1',
},
{
  name: 'BATTLEGROUNDS',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jO9qCdWIV96giP0KAu0VLgHaFz%26pid%3DApi&f=1',
},
];

function App() { 
  return (
    <div>
      {OnlineGame.map(dish =>
      <Game Key={dish.name} name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;
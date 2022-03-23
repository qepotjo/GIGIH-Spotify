import data from './data/data.js';
import './App.css';
const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY;
 function App() {
  return (
    <div className="App">
      <div className="album">
        <img src={data.album.images[0].url} width="300" height="300" className="rotate" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
        <button>select</button>
      </div>
    </div>
  );
}


export default App;

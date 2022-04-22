import{ useState} from 'react'
import PlayList from './PlayList'
// import {DATA_SPOTIFY} from '../data/data.js'
import SearchBar from './SearchBar'
// import config from '../data/config.js'
import Form from './Form'

// import {login} from '../Redux/redux.js';


const PLaylistItem = () =>{
    const [tracks, setTracks] = useState([]);
    const [selected, setSelected] = useState([]);


    const onSuccessSearch = (tracks) => {
        const selectedTracks = filterSelectedTracks();
        const searchDistincTracks = tracks.filter(track => !selected.includes(track.uri));

        setTracks([...selectedTracks, ...searchDistincTracks]);
      }

      const toggleSelect = (track) => {
        const uri = track.uri;

        if (selected.includes(uri)) {
          setSelected(selected.filter(item => item !== uri));
        } else {
          setSelected([...selected, uri]);
        }
      }

      const filterSelectedTracks = () => {
        return tracks.filter(track => selected.includes(track.uri));
      }

    return(
        <div>
            <Form  uris={selected}/>
          <div>
            <SearchBar  onSuccess={(tracks) => onSuccessSearch(tracks)}/>
          </div>
          <div>
            {tracks.map(track => (
              <PlayList
                key={track.id}
                image = {track.album.images[0].url}
                title = {track.name}
                artists ={track.artists[0].name}
                toggleSelect={() => toggleSelect(track)}
              />
            ))}
          </div>
        </div>
    )
}
export default PLaylistItem;

// a
// class Home extends Component {  
//   state = {
//     accToken : '',
//     isLogin: false,
//     tracks:[],
//   }

//   getHashParams() {
//     const hashParams = {};
//     const r = /([^&;=]+)=?([^&;]*)/g;
//     const q = window.location.hash.substring(1);
//     let e = r.exec(q);
//     while (e) {
//       hashParams[e[1]] = decodeURIComponent(e[2]);
//       e = r.exec(q);
//     }
//     return hashParams;
//   }

//   componentDidMount() {
//     const params = this.getHashParams();
//     const {access_token : accessToken} = params;

//     this.setState({accToken: accessToken, isLogin: accessToken !== undefined});

//   }

//   getLinkAuth(){
//     const state = Date.now().toString();
//     const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

//     return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
//   }

//   onSuccessSearch(tracks) {
//     this.setState({ tracks });
//   }


//   render() {
//       return (
//         <div className="home">
//           <div className='search__bar'>
//             {!this.state.isLogin &&( <a href={this.getLinkAuth()}>SPOTIFY</a>)}
//             <SearchBar accessToken={this.state.accToken} onSuccess={(tracks) =>this.onSuccessSearch(tracks)}/>
//           </div>
//           <div className="playlist__container">
//            {this.state.tracks.map((data)=>(
//              <PlayList
//                  key={data.album.id}
//                  image={data.album?.images[0]?.url}
//                  songName={data.name}
//                  albumName={data.album?.name}
//                  artists={data.artists[0].name}
//               />

//          ))}
      
//          </div>
//         </div>
//       )
//   }
// }
// export default Home;








// a
 // export default function PlaylistItem() {
//   return (
//     <div className="playlist__container">
//       {DATA_SPOTIFY.map((data)=>(
//         <PlayList
//                 key={data.album.id}
//                 image={data.album?.images[0]?.url}
//                 songName={data.name}
//                 albumName={data.album?.name}
//                 artists={data.artists[0].name}
//              />

//         ))}
      
//     </div>
//   );
// }


// ;
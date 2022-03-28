import PlayList from './PlayList'
import {DATA_SPOTIFY} from '../data/data.js'


export default function PlaylistItem() {
  return (
    <div className="playlist__container">
      {DATA_SPOTIFY.map((data)=>(
        <PlayList
                key={data.album.id}
                image={data.album?.images[0]?.url}
                songName={data.name}
                albumName={data.album?.name}
                artists={data.artists[0].name}
             />

        ))}
      
    </div>
  );
}


;
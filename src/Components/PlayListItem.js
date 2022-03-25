import PlayList from './PlayList'
import {DATA_SPOTIFY} from '../data/data.js'
const { album, name: songName, artists } = DATA_SPOTIFY;

export default function PlaylistItem() {
  return (
    <div className="playlist__container">
      <PlayList
        image={album?.images[0]?.url}
        songName={songName}
        albumName={album?.name}
        artists={artists}
      />
    </div>
  );
}


;
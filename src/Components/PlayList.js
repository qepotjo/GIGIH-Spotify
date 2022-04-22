import React, { useState } from 'react';
import "./index.css"
import Button from '@mui/material/Button';

export default function PlayList({image, title, artists, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect=()=>{
    setIsSelected(!isSelected)
    toggleSelect()
  }

  return (
    <div class="playlist-card playlist-card-success card">
          <div class="logo">
            <img src={image} alt={title} />
          </div>
          <div class="text">
            <p class="title">
              {title}
            </p>
            <small class="sub-title">
              {artists}
            </small>
          </div>
          <div class="value">
            <Button className="button" id="select" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</Button>
          </div>
        </div>
    
   
  );
}
    // <div className="playlist">
    //   <img className="playlist__image" src={image} alt={title} />
    //   <h1 className="playlist__title">{title}</h1>
    // <div className="playlist__item">
    //   <h2 className="playlist__artists">{artists}</h2>
    //   <button id="select" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</button>
    //  </div>
    //  </div> 

// export default function PlayList({ image, songName, albumName, artists, url }) {
//   return (
//     <div className="body">
//       <div className="playlist__content">
//         <img className="playlist__image" src={image} alt={songName} />
//         <h1 >{songName}</h1>
//         <h2 >{albumName}</h2>
//         <h3 >{artists}</h3>      
//         <button type="button" className="playlist__button">
//           <a href="{url}"> Add </a>
//         </button>
//       </div>
//     </div>
//   );
// }
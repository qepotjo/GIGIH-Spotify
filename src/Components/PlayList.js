import React, { useState } from 'react';

export default function PlayList({image, songName, artists, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect=()=>{
    setIsSelected(!isSelected)
    toggleSelect()
  }

  return (
    <div className="body">
      <img className="playlist__image" src={image} alt={songName} />
      <h1>{songName}</h1>
      <h2>{artists}</h2>
      <button id="select" onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</button>
      
    </div>
  );
}


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
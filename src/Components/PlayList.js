export default function PlayList({ image, songName, albumName, artists }) {
  return (
    <div className="playlist__item">
      <img className="playlist__image" src={image} alt={songName} />
      <div className="playlist__content">
        <h2 className="playlist__title">{songName}</h2>
        <h3 className="playlist__description">{albumName}</h3>
      </div>
      <div className="playlist__actions">
        <button type="button" className="playlist__button">
          Select
        </button>
      </div>
    </div>
  );
}
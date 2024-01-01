import { Link } from "react-router-dom";

export default function Details({ title, src, description, genres, url, rating }) {
  return (
    <div>
      <h1>
        <a href={url} target="_blank">
          {title}
        </a>
      </h1>
      <img src={src} alt={title} />
      <h3>Description</h3>
      <p>{description}</p>
      <h4>Movie Rating: {rating}</h4>
      <div>
        <h4>genres</h4>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      <hr />
      <a href={url} target="_blank">
        Go to the site...
      </a>
      <p />
      <Link to="/home">Go to the Movie List...</Link>
    </div>
  );
}

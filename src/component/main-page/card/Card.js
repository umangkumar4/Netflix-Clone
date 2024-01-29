import React from 'react'
import './card.css'
function Card({Title,poster}) {
    const imgUrl=`https://image.tmdb.org/t/p/w780//${poster}`;
    // console.log(poster);
  return (
    <div>
      <img className="card-poster" src={imgUrl} alt='Poster'/>    
    </div>
  )
}

export default Card

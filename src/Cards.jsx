import React from 'react';

function Card(props){
   // console.log(props);
    return(
        <div className="cards">
        <div className="card">
          <img src={props.image} alt="myPic" className="card_img"/>
          <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.cardName}</h3>
          <a href={props.href}  target="_blank" rel="noreferrer">
              <button className="button">Watch Now</button>
          </a>
          </div>
        </div>
    </div>    
    )
}

export default Card;
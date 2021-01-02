import React from 'react';

function Tile(props) {
  return(
    <div className="portfolio-tile" onClick={props.func}>
      <div className="portfolio-wrap">
        <div className="portfolio-header">
          <span className="portfolio-subtitle">{props.subtitle}</span>
          <h3 className="portfolio-title">{props.title}</h3>
        </div>
        <figure className="portfolio-img-wrap" data-category={props.label}>
          <img src={props.src} alt={props.alt} className="portfolio-img"></img>
        </figure>
        <div className="portfolio-desc">
          <p className="portfolio-brief">{props.brief}</p>
          <div className="link-wrapper">
            <i className="fa fa-external-link"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tile;
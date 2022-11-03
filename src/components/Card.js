import React from 'react';

function Card(props) {
    // Logic
    
    // Card Component
    return (
        <section className="card">
            <img className="card__img" src={props.img} alt="Some person standing." />
            
            <div className="card-content">
                <div className="location">
                    <img src="/images/location-icon.svg" width="7px" height="10px" alt="Some person standing." />
                    <h3 className="location-title">{props.location}</h3>
                    <p className="location-text"><a href={props.link}>View on Google Maps</a></p>
                </div>
                <h2 className='content-title'>{props.title}</h2>
                <h3 className='content-dates'>{props.startDate} - {props.endDate}</h3>
                <p className='content-text'>{props.description}</p>
            </div>
        </section>
    )
}

export default Card;
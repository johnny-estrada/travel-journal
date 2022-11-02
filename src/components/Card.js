import React from 'react';

function Card(props) {
    console.log(props)
    return (
        <section className='card'>
            <img className='card__img' src={props.imageUrl} alt='Mt. Fuji in Japan.' />
        </section>
    )
}

export default Card;
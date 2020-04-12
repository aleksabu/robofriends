import React from 'react';

const Card = ({name,email,id}) => {
    return(
        <div className='bg-light-green dib tc ma2 pa2 bw2 br3 shadow-5 grow'>
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

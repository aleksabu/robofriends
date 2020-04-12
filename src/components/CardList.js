import React from 'react';
import Card from './Card';



const CardList = ({robots}) => {
    return (
        <div>  
            {robots.map((user,i) => {
                return (
                <Card 
                key={i} 
                id={robots[i].id}
                name={robots[i].name} 
                email={robots[i].email}/>);
    })}
        </div>
    )
}

export default CardList;


// ovde je bio maparray van diva,al posto moze da se pise javascript u html (jsx) prebacio sam u div u {};
// bilo je ovako const cardComponent = robots.map .... itd,a izmedju <div></div> je stajalo {cardComponent} sto mu dodje na isto
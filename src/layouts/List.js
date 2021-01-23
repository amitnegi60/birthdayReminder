import React from 'react';


const List = ({people, setPeople}) => {


  const birthdays = people.map((peopl) => {
    const {id, name, age, image} = peopl;

    return (
      <article key={id} className="person">
      <img src={image} alt="birthdays"/>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
     </article>
    );
   
})

return (
        <>
         <div>{birthdays}</div>
          
         </>
);

}


export default List;
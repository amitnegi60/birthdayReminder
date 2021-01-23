import React, {useState} from 'react';
import "./App.css";

import List from './layouts/List';

function App() {

  const daataa = [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ];


const [people, setPeople] = useState(daataa)

  

const clickHandeler= () => {
  setPeople([]);
}

const displayHandeler= () => {
  setPeople(daataa);
}

  return (
          <>
          <main>
            <section className="container">
            <h3>{people.length} Birthday Today</h3>
           <List people={people} setPeople={setPeople}/>
            <button type="button" onClick= {clickHandeler}> Clear Birthday's</button>
            <button type="button" onClick= {displayHandeler}> Display Birthday's</button>
           
            </section>
          </main>
         </>

  );
}

export default App;

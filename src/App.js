import { useState } from 'react';
import './App.css';

function App(){
  const [persons,setPersons]=useState([
    {id:1, name:'Doniyorbek :',age: 24, info:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id venenatis ex, accumsan condimentum ex. Proin convallis dolor ex, eget aliquet dui scelerisque in. Donec vitae tempus risus. Sed porta vehicula justo, eget convallis felis. Proin luctus nibh malesuada ex accumsan, sit amet feugiat tortor mattis. Cras sodales tempus nunc, eget viverra dolor varius id. Sed scelerisque mi orci, laoreet auctor est ultricies eget.'},
    {id:2, name:'Abdulboriy :', age: 14, info:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id venenatis ex, accumsan condimentum ex. Proin convallis dolor ex, eget aliquet dui scelerisque in. Donec vitae tempus risus. Sed porta vehicula justo, eget convallis felis. Proin luctus nibh malesuada ex accumsan, sit amet feugiat tortor mattis. Cras sodales tempus nunc, eget viverra dolor varius id. Sed scelerisque mi orci, laoreet auctor est ultricies eget.'},
    {id:3, name:'Muhammadrizo :', age:18, info:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id venenatis ex, accumsan condimentum ex. Proin convallis dolor ex, eget aliquet dui scelerisque in. Donec vitae tempus risus. Sed porta vehicula justo, eget convallis felis. Proin luctus nibh malesuada ex accumsan, sit amet feugiat tortor mattis. Cras sodales tempus nunc, eget viverra dolor varius id. Sed scelerisque mi orci, laoreet auctor est ultricies eget.'},
  ]);

  const deleteItem = id =>{
    console.log(id);
    const filterPerson = persons.filter(filterId => {
      return id !== filterId.id;
    });
    setPersons(filterPerson);
  };

  return (
  <>
  <ul>
    {console.log(persons.length)}
    { persons.length === 0 ? (
    <>
      <h2 className='item-text'>Bu yerda Itemlar tugadi</h2>
      <button className='btn item-btn' onClick={()=>{
        window.location.reload();
      }}>Reload</button>
    </>
    ) :(
      persons.map(person =>(
      <li className='item' key={person.id}>
      <div className='item-title'> 
        <h2>{person.name} </h2>
        <h3>{person.age} </h3>
        </div>
        <p>{person.info}</p>
        <button className='btn' onClick={() =>
          deleteItem(person.id)} >Delete</button>
        </li>
    )))}
  </ul>
  </>
  );
}

export default App;

import React from 'react';

import Header from './Components/Header';
import ListItems from './Components/ListItems';
import Button from './Components/Button';
import './style.css';

const App =()=> {
  return (
    <div className='todo-container'>
    <Header></Header>
    <ListItems text='eat'/>
    <ListItems text='sleep'/>
    <ListItems text='code'/>
    <ListItems text='Repeat'/>
    
    
    <Button title ='add me '/>
 </div>
    
  )
  }


export default App;

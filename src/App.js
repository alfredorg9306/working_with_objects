import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function GoalForm(props){
  const [formData, setFormDate] = useState({goal:"" , by:""}); //ESTO CREAN VARIABLE DE TIPO OBJECT FORMDATE CON LOS ATRIBUTOS DE LOS INPUTS DEL FORM. GOAL AND BY

  function changeHandle(e){
    setFormDate({...formData, [e.target.name]: e.target.value}); // ESTO PERMITE OBTENER EL VALOR DEL INPUT Y GUARDARLO EN LA MISMA VARIABLE A TRAVES DEL EJECTO E.
  }

  function submitHandler(e){ // PREPARANDO EL SUBMIT EVENT FR
    e.preventDefault(); // PREVIENE RECARGAR DE NUEVO
    props.onAdd(formData); // ENVIANDO LOS DATOS AL SUBMIT EVENT USING PROPS AND ONADD VENT
    setFormDate({goal:"", by:""}); //RESET INPUTS 
  }

  return(
    <>
    {/*  PREPARANDO EL FORM
        RECUERDE QUE LO MAS IMPORTANTE EN ESTE FORM ES QUE TODOS LOS VALORES ESTEN CONECTADOS.
        EN LA PROPIEDAD VALUE Y EN EL EVENTO ONCHANGE
    
    */}
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandle}/>
        <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandle}/>
        <button>Submited Goal</button>
      </form>
    </>
  );
}
{/*
    VERY IMPORTANT: REMEMBER COMPONENTS FUNCTION NAME ALWAYS MUST BE CAPITAL LETTER. EXAMPLE ListofGoals and NOT listodGoals.
  
  */}
 function ListOfGoals(props){ // REMEMBER THAT PROPS ARE LIKE THE PARAMETERS WILL PASS TO BE SUBSTITUTED. ESTA FUNCION CREATE LAS LISTAS.
    return(
      <ul>
        {props.allGoals.map((g)=>(
          <li key={g.goal}><span>My goal is to {g.goal} by {g.by}</span></li>
        ))}
      </ul>
    );
}

function App() {

 const[allGoals, updateAllGoals] = useState([]);

 function addGoal(goal){
  updateAllGoals([...allGoals,goal]);
 }


  return (
    <>
    <GoalForm onAdd={addGoal}/>
    <ListOfGoals allGoals={allGoals}/>
    </>
  );
}

export default App;

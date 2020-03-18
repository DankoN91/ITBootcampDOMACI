import React, { useState } from 'react';


const UserInput = (props) => {
    
    const [inpName, setName] = useState('')
    const [inpNumber, setNumber] = useState('')
    let [warning, setWarning] = useState('')

    const handleInputName = (e) => {
      setName(e.target.value)
    }

    const handleInputNumber = (e) => {
      setNumber(e.target.value)
    }

    const handleSubmitUser = (e) => {
      e.preventDefault()
      if(inpName === '' || inpNumber === ''){
        return(setWarning('Neispravan unos!'));
      }
      if(inpNumber.startsWith('+') === false){
        return(setWarning('Potrebna forma je: +XXX XXXXXXX'))
      }
      props.addUser(inpName, inpNumber)
    }


    return (
      <div>
      <form onSubmit = {handleSubmitUser}>
        <input type = 'text' onInput = {handleInputName} placeholder = 'Ime i prezime' name = "name"/><br></br>
        <input type = 'text' onInput = {handleInputNumber} placeholder = 'Broj telefona' name = "number"/><br></br>
      	<p>{warning}</p>
        <button>DODAJ</button>
      </form>
      </div>
    );
}

export default UserInput
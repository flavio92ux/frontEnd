import { Component } from "react";
import States from './BuildState';


class PersonalInfo extends Component {
  render() {

    const { 
      state, 
      handleRadioButtons, 
      handleChange, 
      handleStates, 
      handleOnBlur 
    } = this.props;

    return(
        <fieldset>
          <label>Name: </label>
          <input 
            name="name" 
            value={state.name} 
            onChange={handleChange} 
            required 
          />
          <label>  E-mail: </label>
          <input 
            name="email" 
            type="email" 
            value={state.email} 
            onChange={handleChange} 
            required 
          />
          <label>  CPF: </label>
          <input 
            name="cpf" 
            value={state.cpf} 
            onChange={handleChange} 
            required 
          />
          <label>  Endereço: </label>
          <input 
            name="address" 
            value={state.address} 
            onChange={handleChange} 
            required 
          />
          <label>  Cidade: </label>
          <input 
            name="city" 
            value={state.city} 
            onChange={handleChange} 
            onBlur={handleOnBlur} 
            required 
          />
          <label>Tipo</label>
          <input 
            name="typeHouse" 
            type="radio" 
            value="apartamento" 
            checked={state.selectOption === "apartamento"} 
            onChange={handleRadioButtons} 
          /> Apartamento
          <input 
            name="typeHouse" 
            type="radio" 
            value="casa" 
            checked={state.selectOption === "casa"} 
            onChange={handleRadioButtons} 
          /> Casa
          <States 
            value={state.myState} 
            handleStates={handleStates} 
            required 
          />
        </fieldset>
    )
    
  }
}

export default PersonalInfo;
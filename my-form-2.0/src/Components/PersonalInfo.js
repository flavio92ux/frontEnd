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
          <legend>Informações pessoais</legend>
          <label>
            Nome: 
          <input 
            name="name" 
            value={state.name} 
            onChange={handleChange} 
            required 
          />
          </label>
          <label>
            E-mail:
          <input 
            name="email" 
            type="email" 
            value={state.email} 
            onChange={handleChange} 
            required 
          />
          </label>
          <label>
            CPF:
          <input 
            name="cpf" 
            value={state.cpf} 
            onChange={handleChange} 
            required 
          />
          </label>
          <label>
            Endereço: 
          <input 
            name="address" 
            value={state.address} 
            onChange={handleChange} 
            required 
          />
          </label>
          <label>
            Cidade:
          <input 
            name="city" 
            value={state.city} 
            onChange={handleChange} 
            onBlur={handleOnBlur} 
            required 
          />
          </label>
          <label>
            Tipo
          <input 
            name="typeHouse" 
            type="radio" 
            value="apartamento" 
            checked={state.selectOption === "apartamento"} 
            onChange={handleRadioButtons} 
            selected
          /> Apartamento
          </label>
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
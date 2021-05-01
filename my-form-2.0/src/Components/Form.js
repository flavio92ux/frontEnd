import { Component } from "react";

class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioButtons = this.handleRadioButtons.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      selectOption: "",
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === "name" && value.length > 40) return;
    if (name === "email" && value.length > 50) return;
    if (name === "cpf" && value.length > 11) return;
    if (name === "address" && value.length > 200) return;
    if (name === "city" && value.length > 28) return;

    this.setState({
      [name]: value.toUpperCase(),
    })
  }

  handleRadioButtons(event) {
    this.setState({
      selectOption: event.target.value,
    })
  }

  render() {
     return(
      <fieldset>
          <label>Name: </label>
          <input name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>  E-mail: </label>
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
          <label>  CPF: </label>
          <input name="cpf" value={this.state.cpf} onChange={this.handleChange} required />
          <label>  Endereço: </label>
          <input name="address" value={this.state.address} onChange={this.handleChange} required />
          <label>  Cidade: </label>
          <input name="city" value={this.state.city} onChange={this.handleChange} required />
          <label>Tipo</label>
          <input name="typeHouse" type="radio" value="apartamento" checked={this.state.selectOption === "apartamento"} onChange={this.handleRadioButtons} />Apartamento
          <input name="typeHouse" type="radio" value="casa" checked={this.state.selectOption === "casa"} onChange={this.handleRadioButtons} />Casa
           
        </fieldset>
     ) 
  }
}

export default Form;
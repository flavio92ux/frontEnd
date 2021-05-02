import { Component } from "react";

class RenderInfo extends Component {
  render() {
    const {
      name, 
      email, 
      cpf, 
      address, 
      city, 
      selectOption, 
      myState, 
      curriculumSummary, 
      officePosition, 
      officeDescription 
    } = this.props.state;

    return (
      <div>
        <p>Nome: {name} </p>
        <p>E-mail: {email} </p>
        <p>CPF: {cpf} </p>
        <p>Endereço: {address} </p>
        <p>Cidade: {city} </p>
        <p>Moradia: {selectOption} </p>
        <p>Estado: {myState} </p>
        <p>Resumo do currículo: {curriculumSummary} </p>
        <p>Cargo: {officePosition} </p>
        <p>Descrição do cargo: {officeDescription} </p>
      </div>
    )
  }
}

export default RenderInfo;
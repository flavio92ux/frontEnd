import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
     nome: '',
     email: '',
     estadoFavorito: '',
     vaiComparecer: false,
    }  
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Nome
            <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>

          <label>
            Vai comparecer?
            <input name="vaiComparecer" type="checkbox"  value = {this.state.checked} onChange={this.handleChange} />
          </label>

          

       
        </form>
      </div>
    );
  }

}
  
export default Form;
import { Component } from "react";
import PersonalInfo   from './PersonalInfo';
import OfficeInfo from './OfficeInfo';
import RenderInfo from './RenderInfo';

class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioButtons = this.handleRadioButtons.bind(this);
    this.handleStates = this.handleStates.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      selectOption: '',
      myState:'Acre - AC',
      curriculumSummary:'',
      officePosition:'',
      officeDescription:'',
      setAlert: false,
      submit: false,
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === "name" && value.length > 40) return;
    if (name === "email" && value.length > 50) return;
    if (name === "cpf" && value.length > 11) return;
    if (name === "address" && value.length > 200) return;
    if (name === "city" && value.length > 28) return;
    if (name === "curriculumSummary" && value.length > 1000) return;
    if (name === "officePosition" && value.length > 40) return;
    if (name === "officeDescription" && value.length > 500) return;

    if(name === "name") {
      this.setState({
        [name]: value.toUpperCase(),
      })
      return;
    }

    this.setState({
      [name]: value,
    })
  }

  handleRadioButtons(event) {
    this.setState({
      selectOption: event.target.value,
    })
  }

  handleStates(event) {
    this.setState({
      myState: event.target.value
    })
  }

  handleOnBlur(event) {
    if (parseInt(event.target.value[0]) >= 0 
    && parseInt(event.target.value[0]) <=9 ) {
      this.setState({
        city: '',
      })
    }
  }

  handleOnMouseEnter() {
    if (this.state.setAlert === false) {
      window.alert('Preencha com cuidado esta informação!');
      this.setState({
        setAlert: true,
      })
    } 
  }

  handleClick() {

    if(this.state.name === '') return;
    if(this.state.email === '') return;
    if(this.state.cpf === '') return;
    if(this.state.address === '') return;
    if(this.state.city === '') return;
    if(this.state.curriculumSummary === '') return;
    if(this.state.officePosition === '') return;
    if(this.state.officeDescription === '') return;


    this.setState({
      submit: true,
    })
  }

  render() {
     return(
      <div>
        <PersonalInfo 
          state={this.state} 
          handleRadioButtons={this.handleRadioButtons} 
          handleChange={this.handleChange} 
          handleStates={this.handleStates} 
          handleOnBlur={this.handleOnBlur}
        />
        <OfficeInfo
          state={this.state} 
          handleChange={this.handleChange} 
          handleOnMouseEnter={this.handleOnMouseEnter} 
        />
        <button onClick={this.handleClick} >Submit</button>
        { this.state.submit ? <RenderInfo state={this.state} /> : '' }
      </div>
      
     ) 
     
  }
}

export default Form;

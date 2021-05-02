import { Component } from "react";


class OfficeInfo extends Component {
  render() {
    const { state, handleChange, handleOnMouseEnter } = this.props;
    return (
      <fieldset>
          <label>Resumo do currículo: </label>
          <textarea 
            placeholder="resumo do currículo" 
            name="curriculumSummary" 
            value={state.curriculumSummary} 
            onChange={handleChange} 
            required 
          />
          <label> Cargo: </label>
          <textarea 
            placeholder="Digite seu cargo" 
            name="officePosition" 
            value={state.officePosition} 
            onChange={handleChange} 
            required 
          />
          <label> Descrição do cargo: </label>
          <input 
            name="officeDescription" 
            value={state.officeDescription} 
            onChange={handleChange} 
            onMouseEnter={handleOnMouseEnter} 
            required 
          />
        </fieldset>
    )
  }
}

export default OfficeInfo;
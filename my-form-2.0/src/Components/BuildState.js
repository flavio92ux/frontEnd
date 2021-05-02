import { Component } from 'react';
import data from './data';

class States extends Component {
  render() {
    const { value, handleStates } = this.props;

    return(
      <select value={value} onChange={handleStates}>
        {data.map((item, index) => <option key={index}>{item.nome} - {item.sigla}</option>)}
      </select>
    )
  }
}

export default States;
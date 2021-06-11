import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class Exemplo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Blumenau'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Voce mora em ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha a cidade em que voce mora:
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Blumenau">Blumenau</option>
                    <option value="Pomerode">Pomerode</option>
                    <option value="Gaspar">Gaspar</option>
                    <option value="Indaial">Indaial</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
                </form>
            </header>
        </div>
      );
    }
  }



ReactDOM.render(<Exemplo />, document.getElementById('root')
);


reportWebVitals();

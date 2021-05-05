import React from 'react';
import './App.css';
import statesbr from './statesbr';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      estados: [],
    };
    this.handleValues = this.handleValues.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  async componentDidMount() {
    const states = await statesbr();
    this.setState({
      estados: states.sort((a, b) =>
        a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
      ),
    });
  }

  handleValues(event) {
    const { name, value, maxLength } = event.target;
    if (value.length > maxLength) {
      if (name) return;
    }

    if (name === 'endereco') {
      this.setState({
        [name]: value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
      })
      return;
    }
    console.log(event.target.value);
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  handleRadio(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  onBlur(event) {
    const {value} = event.target;
    console.log(!!value.match(/^\d/));
  }

  render() {
    console.log(this.state);
    const { estados } = this.state;
    return (
      <form action=''>
        <fieldset>
          <div>
            <label htmlFor='name'>Nome</label>
            <input
              name='nome'
              type='text'
              maxLength={40}
              style={{ textTransform: 'uppercase' }}
              required
              onChange={this.handleValues}
            />
          </div>
          <div>
            <label htmlFor='email'>E-mail</label>
            <input
              name='email'
              type='text'
              maxLength={50}
              required
              onChange={this.handleValues}
            />
          </div>
          <div>
            <label htmlFor='cpf'>CPF</label>
            <input
              name='cpf'
              type='text'
              maxLength={11}
              required
              onChange={this.handleValues}
            />
          </div>
          <div>
            <label htmlFor='endereco'>Endereço</label>
            <input
              name='endereco'
              type='text'
              maxLength={200}
              required
              onChange={this.handleValues}
            />
          </div>
          <div>
            <label htmlFor='cidade'>Cidade</label>
            <input
              name='cidade'
              type='text'
              maxLength={28}
              required
              onBlur={this.onBlur}
              onChange={this.handleValues}
            />
          </div>
          <div>
            <label htmlFor='estado'>Estado</label>
            <select
              name='estado'
              defaultValue={this.state.estado}
              onChange={this.handleValues}
            >
              {estados.map(({ nome }) => (
                <option key={nome} value={nome}>
                  {nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor=''>Tipo</label>
            <input
              name='tipo'
              id='casa'
              type='radio'
              value='casa'
              required
              checked={this.state.tipo === 'casa'}
              onChange={this.handleRadio}
            />
            <label htmlFor='casa'>Casa</label>
            <input
              name='tipo'
              id='apartamento'
              type='radio'
              value='apartamento'
              required
              checked={this.state.tipo === 'apartamento'}
              onChange={this.handleRadio}
            />
            <label htmlFor='apartamento'>Apartamento</label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default App;

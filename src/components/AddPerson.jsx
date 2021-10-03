import React from 'react';
import PropTypes from 'prop-types';

class AddPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    if(this.state.name === '' || this.state.age === '') {
      alert('Preencha todos os campos!');
    } else {
      const { onClick } = this.props;
      onClick(this.state);
      this.setState({
        name: '',
        age: ''
      });
    }
  };

  render() {
    const { name, age } = this.state;

  return (
  <section className="add-person-container">
    <form className="add-person-container">
      <label className="form-container" htmlFor="name">
      <p className="form-label">Nome</p>
      <input
        className="form-input"
        id="name"
        value={ name }
        type="text"
        name="name"
        onChange={ this.handleChange }
      />
      </label>
      <label className="form-container" htmlFor="age">
        <p className="form-label">Idade</p>
        <input
          className="form-input"
          id="age"
          value={ age }
          type="number"
          name="age"
          onChange={ this.handleChange }
        />
      </label>
    </form>
    <button className="form-button" onClick={ this.reset }>Adicionar pessoa</button>
  </section>
    );
  };
};

AddPerson.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddPerson;
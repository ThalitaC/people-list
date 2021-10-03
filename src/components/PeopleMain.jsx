import React from 'react';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import PropTypes from 'prop-types';

class PeopleMain extends React.Component {
  constructor(props) {
    super(props);
    const { people } = this.props;
    this.state = {
      people
    };
  }

  onClick = (state) => {
      const { people } = this.state;
      this.setState({
        people: [...people, state],
      });
  }

  render() {
    const { people } = this.state;

    return (
      <div className="people-list-container">
        <header><h1>Lista de Pessoas</h1></header>
        <AddPerson
          onClick={this.onClick}
        />
        <PeopleList people={people} />
      </div>
    );
  };
};

PeopleMain.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleMain;
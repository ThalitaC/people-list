import React from 'react';
import Person from './Person';
import PropTypes from 'prop-types';

class PeopleList extends React.Component {
  render() {
    const { people } = this.props;

    return (
      <div>
        <div className="people-list-title">
        <p className="people-list-item">Nome</p>
        <p className="people-list-item">Idade</p>
        <p className="people-list-item">Faixa etária</p>
        </div>
        {people.map((person, index) => (
          <Person key={index} person={person} />
        ))};
      </div>
    );
  };
};

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleList;
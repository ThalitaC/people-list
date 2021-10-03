import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    const { person } = this.props;
    const { name, age, ageGroup } = person;
    return (
      <div className="people-list-body">
          <div className="people-list-item">{name}</div>
          <div className="people-list-item">{age}</div>
          <div className="people-list-item">{ageGroup}</div>
      </div>
    );
  };
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
};

export default Person;
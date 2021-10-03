import React from 'react';

class PeopleList extends React.Component {
  render() {
    const { people } = this.props;

    return (
      <div className="people-list-container">
        <div className="people-list-title">
        <p className="people-list-item">Nome</p>
        <p className="people-list-item">Idade</p>
        </div>
        { people.map(person => (
          <div key={person.id} className="people-list-body">
            <div className="people-list-item">
              {person.name}
            </div>
            <div className="people-list-item">
              {person.age}
            </div>
          </div>
        )) }
      </div>
    );
}
};

export default PeopleList;
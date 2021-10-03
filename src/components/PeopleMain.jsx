import React from 'react';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import PropTypes from 'prop-types';
import Sorter from './Sorter';

class PeopleMain extends React.Component {
  constructor(props) {
    super(props);
    const { people } = this.props;
    this.state = {
      sortBy: 'default',
      people
    };
  };

  onClick = (state) => {
      const { people } = this.state;
      this.setState({
        people: [...people, state],
      });
  };

  sortPeopleByNameAsc = () => {
    const { people } = this.state;
    const sortedPeople = people.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      people: sortedPeople,
    });
  }

  sortPeopleByNameDesc = () => {
    const { people } = this.state;
    const sortedPeople = people.sort((a, b) => {
      if (a.name.toLowerCase()  > b.name.toLowerCase() ) {
        return -1;
      }
      if (a.name.toLowerCase()  < b.name.toLowerCase() ) {
        return 1;
      }
      return 0;
    });
    this.setState({
      people: sortedPeople,
    });
  }

  sortPeopleByAgeAsc = () => {
    const { people } = this.state;
    const sortedPeople = people.sort((a, b) => a.age - b.age);
    this.setState({
      people: sortedPeople,
    });
  }

  sortPeopleByAgeDesc = () => {
    const { people } = this.state;
    const sortedPeople = people.sort((a, b) => b.age - a.age);
    this.setState({
      people: sortedPeople,
    });
  }

  sortPeople = () => {
    const { sortBy } = this.state;
    switch (sortBy) {
      case 'orderBy':
        this.sortPeopleByAgeAsc();
        break;

      case 'ageAsc':
        this.sortPeopleByAgeAsc();
        break;

      case 'ageDesc':
        this.sortPeopleByAgeDesc();
        break;

      case 'nameAsc':
        this.sortPeopleByNameAsc();
        break;

      case 'nameDesc':
        this.sortPeopleByNameDesc();
        break;

      default:
        break;
    }
  }

  handleChangeSort = (event) => {
    const { value } = event.target;
    this.setState({
      sortBy: value,
    });
  };

  render() {
    const { sortBy, people } = this.state;

    return (
      <div className="people-list-container">
        <header><h1>Lista de Pessoas</h1></header>
        <AddPerson
          onClick={this.onClick}
        />
        <Sorter
          onChange={this.handleChangeSort}
          sortBy={sortBy}
          onClick={this.sortPeople}
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
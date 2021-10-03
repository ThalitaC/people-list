import React from 'react';

class Sorter extends React.Component {
  render() {
    const { sortBy, onChange, onClick } = this.props;

    return (
      <div className="sorter-container" >
        <label htmlFor="sort-by">
          <select
            className="sorter-select"
            name="sortBy"
            value={ sortBy }
            id="filter"
            onChange={ onChange }
            onClick={ onClick }
          >
            <option value="orderBy">Ordenar Por</option>
            <option value="nameAsc">Nome, de A a Z</option>
            <option value="nameDesc">Nome, de  Z a A</option>
            <option value="ageAsc">Idade, da menor para a maior</option>
            <option value="ageDesc">Idade, da maior para a menor</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Sorter;
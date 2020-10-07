import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component'

import { SearchBox } from './component/search-box/search-box.component'


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Bikrant Bidari',
          id: 1
        },
        {
          name: 'Pratigya Paudel',
          id: 2
        },
        {
          name: 'Rajkumar Dhakal',
          id: 3
        },
        {
          name: 'Pratima Dawadi',
          id: 4
        },
        {
          name: 'Suntosh Pandey',
          id: 5
        },
        {
          name: 'Rashmi Khadka',
          id: 6
        },
        {
          name: 'prinsa joshi',
          id: 7
        },
        {
          name: 'sajjan acharya',
          id: 8
        }

      ],
      searchField: ''
    };
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder='search Monsters'
          handelChange={e => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './Main.css';
import CardList from './components/card-list/card-list';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // fetch fake json 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => {
                this.setState({
                    monsters: users
                });
            })
    }

    // using 
    onMonsterChange = (evt) => {
        this.setState({
            searchField: evt.target.value
        });
    }

    render() {
        // destructing 
        const { monsters, searchField } = this.state; 
        // filter 
        const filteredMonster = monsters.filter(monster => 
            // return true or false 
            monster.name.toLowerCase().includes(searchField.toLowerCase())     
        )  

        return(
            <div className="app-main">
                <h1>Monster Rolodex</h1>
                <div className="search">
                    <input type="text" placeholder="search monster" value={this.state.searchField} onChange={this.onMonsterChange} />
                </div>
                <CardList monsters={filteredMonster} />
            </div>
        )
    }
}

export default Main; 
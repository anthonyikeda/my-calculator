import React, { Component } from 'react';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Select a number',
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    selectValue(arg) {
        console.log(arg);
        this.setState({
            value: arg,
        });
    };

    render() {
        return (
            <table>
            <thead>
            <tr>
                <th colSpan="3"><input type="text" value={this.state.value} onChange={this.handleChange} /></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><button onClick={() => this.selectValue(1)}>1</button></td>
                <td><button onClick={() => this.selectValue(2)}>2</button></td>
                <td><button onClick={() => this.selectValue(3)}>3</button></td>
            </tr>
            <tr>
                <td><button onClick={() => this.selectValue(4)}>4</button></td>
                <td><button onClick={() => this.selectValue(5)}>5</button></td>
                <td><button onClick={() => this.selectValue(6)}>6</button></td>
            </tr>
            <tr>
                <td><button onClick={() => this.selectValue(7)}>7</button></td>
                <td><button onClick={() => this.selectValue(8)}>8</button></td>
                <td><button onClick={() => this.selectValue(9)}>9</button></td>
            </tr>
            <tr>
                <td><button onClick={() => this.selectValue('C')}>C</button></td>
                <td><button onClick={() => this.selectValue(0)}>0</button></td>
                <td><button onClick={() => this.selectValue('=')}>=</button></td>
            </tr>
            </tbody>
        </table>
        );
    };
}

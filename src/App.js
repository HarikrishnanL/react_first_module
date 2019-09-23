import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person: [
      { name: "hari", age: "25" },
      { name: "rock", age: "26" },
      { name: "max", age: "29" }
    ]
  }

  switchNameHandler = (NewName) => {
    // console.log("calling succesfully");
    // this.state.person[0].name="rocket dock"
    this.setState({
      person: [
        { name: NewName, age: "26" },
        { name: "rockTest", age: "28" },
        { name: "maxTest", age: "30" }
      ]
    })

  }

  changeNameHandler = (event) => {
    this.setState({
      person: [
        { name: "NameTest", age: "26" },
        { name: event.target.value, age: "28" },
        { name: "maxTest3", age: "30" }
      ]
    })
  }



  render() {

    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>jadfocus</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Harikrishnan")}>Switch name</button>


        <Person name={this.state.person[0].name}
          age={this.state.person[0].age} />
        <Person name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "HariTest")} changedName={this.changeNameHandler}>I am person component from person folder</Person>
        <Person name={this.state.person[2].name}
          age={this.state.person[2].name} />


      </div>
    );
  }
}

export default App;

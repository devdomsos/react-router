import React, { Component } from 'react';

class Home extends Component {    

  handeSubmit  (e) {
    e.preventDefault();
    let teacherName = this.name.vaule;
    let teacherTopic= this.topic.vaule;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  } 
  
  render() {
    return (
      <div className="main-content home">
        <h2>React Route Single Page App</h2>
        <p>This is a React Router test project</p>
        <hr />
        <h3>Featured Teachers</h3>

        <form onSubmit={this.handeSubmit} >
          <input type="text" placeholder="Name" ref={ (input) => {this.name = input}}/>
          <input type="text" placeholder="Topic" ref={ (input) => {this.topic = input}}/>
          <button type="submit">Go!</button>
        </form>
        
      </div>
    );
  }
}

export default Home;
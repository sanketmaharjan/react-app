import React, { Component } from 'react';
import Teacher from './component/Teacher.js';
import './App.css';
import Student from './component/Student.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      students: ['Rabin', 'Nabin', 'Sabin', 'Kabin'],
      student:""
    }
    this.addStudent = this.addStudent.bind(this);
  }
  // addStudent(){
  //   let tempStudent = this.state.students.slice();
  //   tempStudent.push('Rokin')
  //   this.setState({
  //     students:tempStudent
  //   });
  // }

  addStudent(e){
    e.preventDefault();
    this.setState({
      students:[... this.state.students, this.state.student]
    });
  }
  updateStudent(e){
    this.setState({
      student: e.target.value
    })
  }
  // render() {
  //   return (
  //     <div className="App">
      
  //       <Teacher name = "Sanket" isMale = {true}/>
  //       <Teacher name = "Aashish" isMale = {true}/>
  //       <Teacher name = "Dipesh" isMale = {true}/>
  //       <Teacher name = "Prabin" isMale = {true}/>
  //       <Teacher name = "Anushka" isMale = {false}/>

  //     {this.state.students.map((student, i) =>
  //         <Student name={student} key = {i} />
  //     )}

  //     <button onClick = {this.addStudent}>
  //       Click me to add more students.
  //     </button>

  //     </div>
  //   );
  // }

  render(){
    return(
      <div>
        <form onSubmit={this.addStudent}>
          <input type="text" placeholder="add a friend to the list" onChange={this.updateStudent} value={this.student}/>
          <button type="submit">
          Click me to add a student

          </button>
        </form>
      </div>
    )
  }
}

export default App;

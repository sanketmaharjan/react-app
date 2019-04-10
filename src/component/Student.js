import React,{Component} from 'react';

class Student extends Component{
    render(){
        return(
            <div>
                I am a student.
                My name is {this.props.name}
            </div>
        )
    }
}

export default Student;
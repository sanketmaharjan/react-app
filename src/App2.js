import React, {useState} from 'react';
import Student from './component/Student';


const App = () => {
    const[students, updateStudents ] = useState(['Rabin', 'Nabin', 'Sabin', 'Kabin']);
    const [student, updateStudent] = useState("");

    function addStudent(e){
        e.preventDefault();
        updateStudents([... students, student]);
        updateStudent("");
    }
    return(
        <div>

            <form onSubmit={addStudent}>
                <input type="text" placeholder="add a friend" onChange={(e)=>updateStudent
                (e.target.value)} value={student}/>
                <button onClick={addStudent}>
                    Click me to add more and more students
                </button>
            </form>
            {
                students.map((student, i) => <Student name ={student} key={i} />)
            }
            {/* <Student name="Sanket"/>
            <Student name="Manket"/>
            <Student name="Danket"/>
            <Student name="Kanket"/> */}          
        </div>
    )

}

export default App;
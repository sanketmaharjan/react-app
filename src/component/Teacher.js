import React from 'react';

// function Teacher(){
//     return(
//         <div>
//             Hello this is for teaching purpose!
//         </div>
//     )
// }

const Teacher = (props) => {
    return(
        <>
        <div>
            Hello!
        </div>
        <div>
           {props.isMale ? 'Mr.' : 'Mrs.'} {props.name}
        </div>
        </>
    )
}

export default Teacher;
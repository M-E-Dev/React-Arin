import React from 'react';
import ReactDOM from 'react-dom';

//----------------JSX--------------------
const names = ["Harry", "Hermione", "Ron"];


function App(){
    return (
    <div>
        {/* {names.map(name => (<h1>{name}</h1>))} */}
        <button type="button" style={{padding: "10px", color: "white", backgroundColor: "red", border: "2px solid blue"}}>HTML Button</button>

    </div>
    );
}
// class App extends React.Component {
//     render () {
//         return <h1>Class Component</h1>;
//     }
// }


ReactDOM.render(
    <App />,
    document.getElementById("root")
)
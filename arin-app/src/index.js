import React from 'react';
import ReactDOM from 'react-dom';

// function App(){
//     return <h1>Fonksiyonel Component</h1>;
// }


class App extends React.Component {
    render () {
        return <h1>Class Component</h1>;
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)
import React from 'react';
import ReactDOM from 'react-dom';

//----------------JSX--------------------
const names = ["Harry", "Hermione", "Ron"];


function App() {
    return (
        <div>
            {/* {names.map(name => (<h1>{name}</h1>))} */}
            {/* <button type="button" style={{padding: "10px", color: "white", backgroundColor: "red", border: "2px solid blue"}}>jsx Button</button> */}
            {/* <h1 className="display-1">Display 1</h1> */}
            <div className="card-group">
                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
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
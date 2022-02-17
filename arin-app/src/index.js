import React from "react";
import ReactDOM from "react-dom";
import Card from './components/card';

//----------------JSX--------------------
const names = ["Harry", "Hermione", "Ron"];

function App() {
  return (
    <div>
      {/* {names.map(name => (<h1>{name}</h1>))} */}
      {/* <button type="button" style={{padding: "10px", color: "white", backgroundColor: "red", border: "2px solid blue"}}>jsx Button</button> */}
      {/* <h1 className="display-1">Display 1</h1> */}
      <div className="card-group">

        <Card cardTitle="Fenerbahçe"/>

        <Card cardTitle="Galatasaray"/>

        <Card cardTitle="Beşiktaş"/>

      </div>
    </div>
  );
}
// class App extends React.Component {
//     render () {
//         return <h1>Class Component</h1>;
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"));

// const kuzens = ["Özer", "Hasan", "Onur"];

// function KuzenYaz() {
//   return (
//     <div>
//       {kuzens.map((kuzen) => (
//         <h1>{kuzen}</h1>
//       ))}
//     </div>
//   );
// }

// ReactDOM.render(<KuzenYaz />, document.getElementById("root"));

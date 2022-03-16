import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";
import Collapse from "./components/collapse";

//----------------JSX--------------------
// const names = ["Harry", "Hermione", "Ron"];

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Card Title I"
                image="https://picsum.photos/id/100/200/150"
                cardText="Fenerbahçe Spor Kulübü"
                updatedTime="Last updated 1 mins ago"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title II"
                image="https://picsum.photos/id/1040/200/150"
                cardText="Galatasaray Spor Kulübü"
                updatedTime="Last updated 2 mins ago"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                // cardTitle="Card Title II"
                // image="https://picsum.photos/id/120/200/150"
                // cardText="Beşiktaş Spor Kulübü"
                updatedTime="Last updated 3 mins ago"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="container">
//       {/* {names.map(name => (<h1>{name}</h1>))} */}
//       {/* <button type="button" style={{padding: "10px", color: "white", backgroundColor: "red", border: "2px solid blue"}}>jsx Button</button> */}
//       {/* <h1 className="display-1">Display 1</h1> */}
//       <div className="row">
//         <div className="col">

//         </div>
//       </div>
//       <div className="card-group">
//         <Collapse href="collapseExample1">
//           Pure Collapse Content
//         </Collapse>

//         <Collapse href="collapseExample2">
//           <Card
//             cardTitle="Card Title II"
//             image="https://picsum.photos/id/1040/200/150"
//             cardText="Galatasaray Spor Kulübü"
//             updatedTime="Last updated 2 mins ago"
//           />
//         </Collapse>

//         <Collapse href="collapseExample3">
//           <Card
//             cardTitle="Card Title III"
//             image="https://picsum.photos/id/1031/200/150"
//             cardText="Beşiktaş Jimnastik Kulübü"
//             updatedTime="Last updated 3 mins ago"
//           />
//         </Collapse>
//       </div>
//     </div>
//   );
// }
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

// ReactDOM.render(<App />, document.getElementById("root"));

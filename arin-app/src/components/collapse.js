import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();

    this.state = {
      showContent: false,
    };
  }

  render() {
    return (
      <div className="m-2">
        <a
          className="btn btn-primary w-100"
          // //bootstrap özelliklerini sildik, state ile yapıcaz
          // data-bs-toggle="collapse"
          // href={"#".concat(this.props.href)}
          // role="button"
          // aria-expanded="false"
          // aria-controls="collapseExample"
        >
          Link with href
        </a>

        {this.state.showContent ? (
          <div
            className="collapse show"
            //id={this.props.href}
          >
            {this.props.children}
            {this.state.showContent}
          </div>
        ) : null}
      </div>
    );
  }
}


export default Collapse;


// classa çevirilen functional versiyon
// const Collapse = (props) => {
//   console.log(props.children);
//   return (
//     <div className="m-2">
//       <a
//         className="btn btn-primary w-100"
//         data-bs-toggle="collapse"
//         href={"#".concat(props.href)}
//         role="button"
//         aria-expanded="false"
//         aria-controls="collapseExample"
//       >
//         Link with href
//       </a>

//       <div className="collapse show" id={props.href}>
//         {props.children}
//       </div>
//     </div>
//   );
// };

// ilk constructor çalışır -- starte initialize
// render çalıştı
// onclick çalıştı
// setstate nesnesini güncelledi -- trigger render
// render güncel jsx i sayfada gösterdi

import React from "react";

class Collapse extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     showContent: false,
  //   };
  //   // this.showMore = () => {
  //     //   this.setState({showContent: true})
  //     // }
  //     // this.showMore = this.showMore.bind(this)
  //   }

  //constructorsuz da oluyor
  state = {
    showContent: false,
  };

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  // componentDidMount() {
  //   console.log("component oluşturuldu");
  // }

  // componentDidUpdate() {
  //   console.log("component güncellendi");
  // }

  render() {
    return (
      <div className="m-2">
        <button
          className="btn btn-primary w-100"
          onClick={this.showMore}
          
          // //bootstrap özelliklerini sildik, state ile yapıcaz
          // data-bs-toggle="collapse"
          // href={"#".concat(this.props.href)}
          // role="button"
          // aria-expanded="false"
          // aria-controls="collapseExample"
        >
          {/* {this.props.children.props.cardTitle} UZUN YOL*/}

          {React.Children.map(this.props.children, children => children.props.cardTitle)}

        </button>

        {this.state.showContent ? (
          <div
          className="collapse show"
          //id={this.props.href}
          >
            {/* {this.props.children} */}
            {React.Children.map(this.props.children, children => children)}
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

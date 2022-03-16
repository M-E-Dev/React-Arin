import React from "react";
import PropTypes from 'prop-types';

// const Card = (props) => {
//     console.log(props)
//   return (
//     <div className="card w-100">
//       <img src={props.image} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">{props.cardTitle}</h5>
//         <p className="card-text">{props.cardText}</p>
//         <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
//       </div>
//     </div>
//   );
// };


class Card extends React.Component {
  static defaultProps = {
    cardTitle: "Default Title",
    cardText: "Default Text",
    image: "https://picsum.photos/id/1050/200/150"
  }
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  // cardTitle: "Default Title",
  // cardText: "Default Text",
  // image: "https://picsum.photos/id/1050/200/150"
}

Card.propTypes = {
  cardTitle: PropTypes.array
}

export default Card;

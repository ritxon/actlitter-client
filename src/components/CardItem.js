import React, { Component } from "react";
import Link from "react-router-dom/Link";

export class CardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <li className="cards-item">
          <Link className="cards-item-link" to={this.props.path}>
            <figure
              className="cards-item-pic-wrap"
              data-category={this.props.label}
            >
              <img
                src={this.props.src}
                alt="Image"
                className="cards-item-img"
              />
            </figure>
            <div className="cards-item-info">
              <p className="cards-item-text">{this.props.text}</p>
            </div>
          </Link>
        </li>
      </>
    );
  }
}

export default CardItem;

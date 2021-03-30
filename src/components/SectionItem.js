import React, { Component } from "react";
import Link from "react-router-dom/Link";

export class SectionItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <li className="sections__item">
          <Link className="sections__item__link" to={this.props.path}>
            <figure className="sections__item__pic-wrap">
              <img
                src={this.props.src}
                alt="Image"
                className="sections__item__img"
              />
            </figure>
            <div className="sections__item__info">
              <div className="sections__item_text">{this.props.text}</div>
            </div>
          </Link>
        </li>
      </>
    );
  }
}

export default SectionItem;

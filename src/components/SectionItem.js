import React, { Component } from "react";
import Link from "react-router-dom/Link";

export class SectionItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <li className="sections-item">
          <Link className="sections-item-link" to={this.props.path}>
            <figure className="sections-item-pic-wrap">
              <img
                src={this.props.src}
                alt="Image"
                className="sections-item-img"
              />
            </figure>
            <div className="sections-item-info">
              <div className="sections-item-title">
                <h3>{this.props.title}</h3>
              </div>
              <div className="sections-item-text">{this.props.text}</div>
            </div>
          </Link>
        </li>
      </>
    );
  }
}

export default SectionItem;

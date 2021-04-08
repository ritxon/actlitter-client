import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Button from "@material-ui/core/Button";
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
                <h2>{this.props.title}</h2>
              </div>
              <div className="sections-item-text">{this.props.text}</div>
              <div className="sections-item-btn">
                <button to="/">MORE</button>
              </div>
            </div>
          </Link>
        </li>
      </>
    );
  }
}

export default SectionItem;

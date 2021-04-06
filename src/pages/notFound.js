import React, { Component } from 'react'
import Link from "react-router-dom/Link";
import "./impact.css";

export class notFound extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
					<div className="impact_article_flex">
                        <div className="impact_article_container w">
                        <div className="impact_article_container">
                        <div className="impact_article_title">
                            <h1>Page not found</h1>
                            <img src="../../logo_green.png" />
                        </div>
						<div className="impact_img_div">
                            <p>
                                <a href="/">To return the home page.Click Here</a>
                            </p>
                        </div>
                        </div>
                        </div>
					</div>
        )
    }
}

export default notFound

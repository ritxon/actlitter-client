import React, { Component } from 'react'
import "./transition.css"

export class transition extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="transition">
                <div className="previous_title_div">
                    <font className="previous_title">
                        {this.props.title}
                    </font>
                </div>
                <div className="previous_details">
                    <div className="previous_text_div">
                        <font className="previous_text">
                            {this.props.text}
                        </font>
                    </div>
                    <div className="previous_right_img_div">
                            <img
                                src={this.props.src}
                                alt="Image"
                                className="previous_right_img"
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default transition

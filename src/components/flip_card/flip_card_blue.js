import React, { Component } from 'react';
import "./flip_card_blue.css"

export class flip_card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>

                <div class="maincontainer">

                    <div class="thecard">

                        <div class="thefront_blue">
                        <img src={this.props.src}></img>
                            <div className="volunteer_card_blue_title_div">
                                <p className="volunteer_card_blue_title">
                                {this.props.front_title}
                                </p>
                            </div>
                            <div className="volunteer_card_blue_details_div">
                                <p className="volunteer_card_blue_details">
                                {this.props.front_num}
                                </p>
                            </div>
                            <div className="volunteer_card_blue_details_div2">
                                <p className="volunteer_card_blue_details2">
                                {this.props.front_text}
                                </p>
                            </div>
                        </div>

                        <div class="theback">
                            <div className="volunteer_card_blue_title_div">
                                <p className="volunteer_card_blue_title">
                                {this.props.front_title}
                                </p>
                            </div>
                            <div className="volunteer_card_blue_back_div">
                                <p className="volunteer_card_blue_back">
                                {this.props.back_details}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default flip_card

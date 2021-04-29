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
                                <font className="volunteer_card_blue_title">
                                {this.props.front_title}
                                </font>
                            </div>
                            <div className="volunteer_card_blue_details_div">
                                <font className="volunteer_card_blue_details">
                                {this.props.front_num}
                                </font>
                            </div>
                            <div className="volunteer_card_blue_details_div2">
                                <font className="volunteer_card_blue_details2">
                                {this.props.front_text}
                                </font>
                            </div>
                        </div>

                        <div class="theback">
                            <div className="volunteer_card_blue_title_div">
                                <font className="volunteer_card_blue_title">
                                {this.props.front_title}
                                </font>
                            </div>
                            <div className="volunteer_card_blue_back_div">
                                <font className="volunteer_card_blue_back">
                                {this.props.back_details}
                                </font>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default flip_card

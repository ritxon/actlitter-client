import React, { Component } from 'react';
import "./flip_card_pink.css"

export class flip_card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <div class="maincontainer">

                    <div class="thecard">

                        <div class="thefront_pink">
                        <img src={this.props.src}></img>
                            <div className="volunteer_card_pink_title_div">
                                <font className="volunteer_card_pink_title">
                                    {this.props.front_title}
                                </font>
                            </div>
                            <div className="volunteer_card_pink_details_div">
                                <font className="volunteer_card_pink_details">
                                    {this.props.front_num}
                                </font>
                            </div>
                            <div className="volunteer_card_pink_details_div2">
                                <font className="volunteer_card_pink_details2">
                                    {this.props.front_text}
                                </font>
                            </div>
                        </div>

                        <div class="theback">
                            <div className="volunteer_card_pink_title_div">
                                <font className="volunteer_card_pink_title">
                                    {this.props.front_title}
                                </font>
                            </div>
                            <div className="volunteer_card_pink_back_div">
                                <font className="volunteer_card_pink_back">
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

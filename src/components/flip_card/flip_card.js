import React, { Component } from 'react';
import "./flip_card.css"

export class flip_card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>

                <div class="maincontainer">

                    <div class="thecard">

                        <div class="thefront">
                            <img src={this.props.src}></img>
                            <div className="volunteer_card_title_div">
                                <p className="volunteer_card_title">
                                {this.props.front_title}
                                </p>
                            </div>
                            <div className="volunteer_card_details_div">
                                <p className="volunteer_card_details">
                                {this.props.front_num}
                                </p>
                            </div>
                            <div className="volunteer_card_details_div2">
                                <p className="volunteer_card_details2">
                                {this.props.front_text}
                                </p>
                            </div>
                        </div>

                        <div class="theback">
                            <div className="volunteer_card_title_div">
                                <p className="volunteer_card_title">
                                {this.props.front_title}
                                </p>
                            </div>
                            <div className="volunteer_card_back_div">
                                <p className="volunteer_card_back">
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

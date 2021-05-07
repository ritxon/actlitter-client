import React, { Component } from 'react'

export class transition_2_cards extends Component {
    constructor(props) {
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
                    <div className="previous_right_cards_div">
                        {/* green card */}
                        <div className="trans_one_card_2">
                        <div class="maincontainer_2">

                            <div class="thecard_2">

                                <div class="thefront_2">
                                    <div className="volunteer_card_2_title_div">
                                        <font className="volunteer_card_2_title">
                                            {this.props.front_title}
                                        </font>
                                    </div>
                                    <div className="volunteer_card_2_details_div">
                                        <font className="volunteer_card_2_details">
                                            {this.props.front_text}
                                        </font>
                                    </div>
                                    <div className="volunteer_card_2_details_div2">
                                        <font className="volunteer_card_2_details2">
                                            {this.props.front_text2}
                                        </font>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>


                        {/* pink card */}
                        <div className="trans_one_card_2">
                        <div class="maincontainer_2">

                            <div class="thecard_2">

                                <div class="thefront_2">
                                    <div className="volunteer_card_2_title_div">
                                        <font className="volunteer_card_2_title">
                                            {this.props.pink_front_title}
                                        </font>
                                    </div>
                                    <div className="volunteer_card_2_details_div">
                                        <font className="volunteer_card_2_details">
                                            {this.props.pink_front_text}
                                        </font>
                                    </div>
                                    <div className="volunteer_card_2_details_div2">
                                        <font className="volunteer_card_2_details2">
                                            {this.props.pink_front_text2}
                                        </font>
                                    </div>

                                </div>

                            </div>
                        </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default transition_2_cards

import React, { Component } from 'react'
import "./volunteer_organizations.css"

export class volunteer_organizations extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="vol_org_compontent">
                <div className="vol_org_compontent_img_div">
                    <a href={this.props.href1}>
                        <img className="vol_org_compontent_img" src={this.props.src1} />
                    </a>
                </div>
                <div className="vol_org_compontent_img_div">
                    <a href={this.props.href2}>
                        <img className="vol_org_compontent_img" src={this.props.src2} />
                    </a>
                </div>
                <div className="vol_org_compontent_img_div">
                    <a href={this.props.href3}>
                        <img className="vol_org_compontent_img" src={this.props.src3} />
                    </a>
                </div>
                <div className="vol_org_compontent_img_div">
                    <a href={this.props.href4}>
                        <img className="vol_org_compontent_img" src={this.props.src4} />
                    </a>
                </div>
                <div className="vol_org_compontent_img_div">
                    <a href={this.props.href5}>
                        <img className="vol_org_compontent_img" src={this.props.src5} />
                    </a>
                </div>
                <div className="vol_org_compontent_img_div">
                    <a href={this.props.href6}>
                        <img className="vol_org_compontent_img" src={this.props.src6} />
                    </a>
                </div>
            </div>
        )
    }
}

export default volunteer_organizations

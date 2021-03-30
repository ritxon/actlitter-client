import React, { Component } from 'react';

import Article from '../components/Article';

export class info extends Component {
    render() {
        return (
            <>
        
            <div>
                <h1 className='info'>Info</h1>
            </div> 
            <Article 
            title="Environmental protection"
            text="Environmental protection (referred to as environmental protection) is the act of protecting the natural environment at the level of individuals, organizations, or governments for the benefit of nature and humans. Due to industrial development, the environmental pollution problem is too serious, harming the ecological environment, and some have reached the point of irreversibility, triggering industrialized countries to pay attention to the environment, and then use national laws and regulations to regulate and deal with pollution problems, and make publicity to all Society pays attention to the far-reaching impact of pollution on the environment."/>
            </> 
        )
    }
}

export default info
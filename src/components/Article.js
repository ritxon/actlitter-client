import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import './article.css'

export class article extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div classname="container">
                <div classname='title'>
               <h1 className='article_title'></h1> 
               {this.props.title}
              
              </div>
              <div classname='content'>
              <h5 className='article_text'>
              {this.props.text}  
              </h5>
              </div>
              
            </div>
        )
    }
}

export default article

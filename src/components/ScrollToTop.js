import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class ScrollToTop extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname!==prevProps.location.pathname){
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      }
     
      render() {
        return (
          this.props.children
        );
      }
    }
     
    export default withRouter(ScrollToTop);
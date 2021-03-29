import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"

import '../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards';

export class home extends Component {
    render() {
        return (
            <>
                <HeroSection/>
                <Cards/>
            </> 
        )
    }
}

export default home

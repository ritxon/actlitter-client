import React, { Component } from 'react'
import './heroSection.css';
import '../App.css';

class HeroSection extends Component {
    render() {
        return (
            <div className='hero-container'>
                <video src="/videos/video-1.mp4" autoPlay loop muted />
                <h1>STOP LITTERING</h1>
                <p>Be a nature saviour</p>
            </div>
        )
    }
}

export default HeroSection

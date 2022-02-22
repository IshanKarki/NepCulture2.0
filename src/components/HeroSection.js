import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/main_video_Trim.mp4' autoPlay loop muted />
            <h1>Welcome to NepCulture</h1>
            <p>All your social, cultural values at one place!</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <div className='for-width'>
                </div>
                <Link to='/exhibition'>
                    <button
                        className='tour'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                    >
                        TAKE A TOUR
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
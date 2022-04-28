import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './Components/Wrapper'
import { ParallaxProvider } from 'react-scroll-parallax';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(   
        <ParallaxProvider>
        <Wrapper/>
        </ParallaxProvider>
);


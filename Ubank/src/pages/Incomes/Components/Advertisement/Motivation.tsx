import React from 'react';
import './Motivation.css';

const Motivation: React.FC = () => (
    <div className="motivation-card">
        <h2>
            You are doing <span className="highlight">amazing!!</span>
        </h2>
        <p>Keep going to reduce your minor expenses</p>
        <div className="image-placeholder">
            <div className="purple-circle"></div>
        </div>
    </div>
);

export default Motivation;

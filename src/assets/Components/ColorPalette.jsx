import React, { useState, useEffect } from 'react';
import './ColorHunt.css';

const CardPalleteColor = ({ color }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        <div 
            className="color-item" 
            style={{ backgroundColor: color }} 
            onClick={copyToClipboard}
        >
            <span className="hex-code">{color}</span>
        </div>
    );
};

const CardPalleteColorsList = ({ colors }) => (
    <div className="colors-stack">
        {colors.map((hex, index) => (
            <CardPalleteColor key={`${hex}-${index}`} color={hex} />
        ))}
    </div>
);

const CardPallete = ({ likes, date, colors }) => {
    const [currentLikes, setCurrentLikes] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setCurrentLikes(prev => prev + 1);
        setIsLiked(true);
    };

    useEffect(() => {
        let timer;
        if (isLiked) {
            timer = setTimeout(() => {
                setIsLiked(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isLiked]);

    return (
        <div className="card-container">
            <CardPalleteColorsList colors={colors} />
            <div className="card-meta">
                <button 
                    className={`like-btn ${isLiked ? 'active' : ''}`} 
                    onClick={handleLike}
                >
                    <span className="heart-icon">{isLiked ? '❤️' : '🤍'}</span>
                    <span className="count">{currentLikes}</span>
                </button>
                <span className="date-tag">{date}</span>
            </div>
        </div>
    );
};

export const CardPalleteList = ({ data }) => {
    return (
        <div className="main-grid">
            {data.map((card) => (
                <CardPallete key={card.id} {...card} />
            ))}
        </div>
    );
};
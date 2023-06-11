import React, { useState, useRef } from 'react';
import './EggManGame.css';

const EggManGame = () => {
    // State variables to keep track of the score, number of eggs and egg pack
    const [score, setScore] = useState(0);
    const [eggs, setEggs] = useState(20);
    const [eggPack, setEggPack] = useState(null);

    // References to DOM elements
    const eggRef = useRef(null);
    const gameRef = useRef(null);

    // Function that handles the mouse down/touch start events
    const handleMouseDown = (e) => {
        // Only create an egg if there are eggs remaining
        if (eggs > 0) {
            // Determine if it's a touch event and get the clientX and clientY accordingly
            const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

            // Get the bounding rectangle of the game element to calculate relative position
            const gameRect = gameRef.current.getBoundingClientRect();
            const relativeX = clientX - gameRect.left;
            const relativeY = clientY - gameRect.top;

            // Create an egg element and set its position
            const egg = document.createElement('div');
            egg.className = 'egg';
            egg.style.left = `${relativeX}px`;
            egg.style.top = `${relativeY}px`;
            eggRef.current.appendChild(egg);

            // Add event listeners for both mouse and touch events
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('touchmove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchend', handleMouseUp);

            // Decrement the number of eggs
            setEggs(eggs - 1);
        }
    };

    // Function that handles the mouse move/touch move events
    const handleMouseMove = (e) => {
        // Determine if it's a touch event and get the clientX and clientY accordingly
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

        // Get the bounding rectangle of the game element to calculate relative position
        const gameRect = gameRef.current.getBoundingClientRect();
        const relativeX = clientX - gameRect.left;
        const relativeY = clientY - gameRect.top;

        // Move the egg with the mouse/touch
        const egg = eggRef.current.lastChild;
        egg.style.left = `${relativeX - 10}px`;
        egg.style.top = `${relativeY - 10}px`;
    };

    // Function that handles the mouse up/touch end events
    const handleMouseUp = (e) => {
        // Remove event listeners to stop tracking mouse/touch movement
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleMouseMove);
        document.removeEventListener('touchend', handleMouseUp);

        // Get the last egg that was moved
        const egg = eggRef.current.lastChild;
        if (!egg) return;

        // Get the eggman element
        const eggMan = document.getElementById('egg-man');
        // Check if the egg collides with the eggman and increment the score if it does
        if (egg && isColliding(egg.getBoundingClientRect(), eggMan.getBoundingClientRect())) {
            setScore(score + 1);
            if (score + 1 === 10) {
                alert("10 eggs");
            }
        }

        // Remove the egg element from the DOM
        if (egg) {
            eggRef.current.removeChild(egg);
        }

        // Check if out of eggs and ask if the user wants to buy more
        if (eggs - 1 === 0) {
            const userResponse = prompt("You have run out of eggs, would you like to buy an 80 pack of eggs?", "");
            if (userResponse && userResponse.toLowerCase() === "yes") {
                setEggs(80);
                setEggPack(80);
            }
        }
    };

    // Function to check if two elements are colliding
    const isColliding = (rect1, rect2) => {
        return !(rect2.left > rect1.right ||
            rect2.right < rect1.left ||
            rect2.top > rect1.bottom ||
            rect2.bottom < rect1.top);
    };

    // Render the game elements
    return (
        <div className="game" ref={gameRef}>
            <div id="egg-man" className="egg-man"></div>
            <div className="basket" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}></div>
            <div ref={eggRef} className="egg-container"></div>
            <div className="score">Score: {score}</div>
            {eggPack !== null && <div className="egg-pack">Eggs: {eggs}</div>}
        </div>
    );
};

export default EggManGame;

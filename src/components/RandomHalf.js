import React, { useState } from 'react';
import '../styles/App.css';

const RandomHalf = () => {
    const [drink, setDrink] = useState("");

        return (
            
            <div>
                <div>
                    <button className="button" onClick={() => (Math.random() < 0.5 ? setDrink("CLEAR") : setDrink("BROWN"))} > Clear or Brown </button>
                </div>
                <p> YOU ARE DRINKING {drink} </p>
            </div>
        )
}

export default RandomHalf;
import React from 'react';
import './VideoBanner.css';

function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__info ">
                <h1>Looking for Solution, use Samadhan App.</h1>
                <h4>
                    Millions of people use Samadhan.com to solve their daily problem.
                </h4>
                <div class="container-lg">
                <button className="videoBanner__info--first  ">
                    Find sAmAdhAn
                </button>
                <button className="videoBanner__info--second ml-2">
                    Earn Money 
                </button>
                </div>
            </div>

        </div>
    )
}

export default VideoBanner

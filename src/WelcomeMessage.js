import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <section className='game-previews'>
                <h2>
                    <strong>FINALS</strong>
                </h2>
                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(t)o (9-5-0 | 2nd) vs No Barkley All Bite (9-5-0 | 1st)</strong></p>
                    <p><em>Projected Scores:</em> 131 to 117</p>
                    <p>There haven't been many upsets in this playoff run as the 1st and 2nd seed battle for it all. But all trends will be moot after the victory takes the crown this week.
                    </p>
                    <p>Can Bill's kicker punt another opponent out of the playoffs?</p>
                    <p>Or will the wintry cold be homefield advantage for the LoPresto's buffalo roster?</p>
                </div>

            </section>

            <footer>
                <p>Well played to all and a tip of the hat for our impending crown winner. Best of luck!!</p>
                <p>Best,<br />Kyle, Your <s>Dedicated</s> Dessicated Commissioner</p>
            </footer>
        </div>
    );
}

export default WelcomeMessage;

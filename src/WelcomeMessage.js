import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 15 Awards!</h1>
            </div>

            <section className="announcement">
                <h2><strong>👑Top Team Score</strong>: 147 pts -- The Passion of the Christ(ian)
                </h2>
                <h2><strong>👑Top Player Score</strong>: Christian McCaffrey -- 40.2 pts -- The Passion of the Christ(ian)
                </h2>
                <h2><strong>👑Biggest Win</strong>: 66 pts -- No Barkley Barely A Bite
                </h2>
                <h2><strong>Fail Snail</strong>: 🐌 Lucy's Head Coach 🐌 -- I thought the surprise early games would be the nail in the coffin. But a first round running back with negative points went John Henry on my season like nothing else could. </h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />            </section>

            <section className='game-previews'>
                <h2><strong>SEMIFINALS</strong> - {'"There are too few of us now" --Treebeard'}
                </h2>
                <div className="game-preview">
                    <p>🏈 Semifinals: <strong>The Passion of the Christ(ian) (8-6-0 | 4th) vs No Barkley All Bite (9-5-0 | 1st)</strong></p>
                    <p><em>Projected Scores:</em> 120 to 121</p>
                    <p>Friends turned frenemies for the semifinals. Who will taste frictory!</p>
                </div>
                <div className="game-preview">
                    <p>🏈 Semifinals: <strong>Hanah's Nifty Team (9-5-0 | 3rd) vs Espresso LoPres(t)o (9-5-0 | 2nd)</strong></p>
                    <p><em>Projected Scores:</em> 117 to 110</p>
                    <p>Witness a nautical tussle! Hanah, the reigning Port (Jervis) Authority, sailing her team against Alicen, Buffalo (Bills) Snow Lord. Will Hanah be collecting victory? Or will Alicen's blizzard of points leave her snowbound for the championship?
                    </p>
                </div>

                <div className="game-preview">
                    <p>🏈 Consolation: <strong>Lucy's Mom has got it going on (7-7-0 | 5th) vs Lucy's Head Coach (8-6-0 | 8th)</strong></p>
                    <p><em>Projected Scores:</em> 120.39 to 120.98</p>
                    <p>A family feud that never made it to a reality TV show - with no drama and no bragging rights. Merry Christmas honey! Glad to always end up by your side.
                    </p>
                </div>

                <div className="game-preview">
                    <p>🏈 Consolation: <strong>The Maine Event (6-6-0 | 6th) vs Dean's Definitive Team(6-8-0 | 7th)</strong></p>
                    <p><em>Projected Scores:</em> 114.82 to 102.19</p>
                    <p>Like Jo and Kyle, somehow the strategy of lose now, win later did not pan out in the playoffs for Craig and Dean. Best of luck in the consolation hunt. The prize? I don't know, a duck maybe? Oh, a Christmas goose!
                    </p>
                </div>
                <div className="announcement">
                    Best of luck to our semi-finalists!
                </div>
            </section>

            <footer>
                <p>CHRISTMAS!!!</p>
                <p>Best,<br />Kyle, Your <s>Dedicated</s> Dessicated Commissioner</p>
            </footer>
        </div>
    );
}

export default WelcomeMessage;

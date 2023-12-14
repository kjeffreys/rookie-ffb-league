import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 14 Awards!</h1>
            </div>

            <section className="announcement">
                <h2><strong>👑Top Team Score</strong>: 181.52 pts -- Espresso LoPresto
                </h2>
                <h2><strong>👑Top Player Score</strong>: Lamar Jackson -- 33.64 pts -- The Unit
                </h2>
                <h2><strong>👑Biggest Win</strong>: 75 pts -- Espresso LoPres(t)o
                </h2>
                <h2><strong>Fail Snail</strong>: 🐌 Hanah's Nifty Team 🐌 -- Hanah fell 29 pts short of projection. But at least it only came off the back of losing her quarterback right before playoffs...yeesh! </h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />            </section>

            <section className='game-previews'>
                <h2><strong>QUARTERFINALS</strong> - Where Dreams Come True (or get CRUSHED for half of us)
                </h2>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (5-9-0 | 8th) vs No Barkley All Bite (9-5-0 | 1st)</strong></p>
                    <p><em>Projected Scores:</em> 108.34 to 118.16</p>
                    <p>Kyle's team: valiant underdogs or just waiting to be Bill's next discarded chew toy? Place your bets!</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (6-8-0 | 7th) vs Espresso LoPres(t)o (9-5-0 | 2nd)</strong></p>
                    <p><em>Projected Scores:</em> 108.02 to 115.61</p>
                    <p>It's the classic tale of hard work vs. sheer existence. Who will emerge victorious?
                    </p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (7-7-0 | 5th) vs The Passion of the Christ(ian) (8-6-0 | 4th)</strong></p>
                    <p><em>Projected Scores:</em> 120.39 to 120.98</p>
                    <p>Joanna and Eric, both sitting comfortably in the middle of the pack, are ready to bid a <i>top o the mornin</i> on their way up the winners bracket. Will Joanna's team dance a jig to victory, or will Eric’s squad find the pot of gold at the end of the rainbow?
                    </p>
                    <p>
                        We'll see who has the luck of the Irish
                    </p>

                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Maine Event (6-6-0 | 6th) vs Hanah's Nifty Team (9-5-0 | 3rd)</strong></p>
                    <p><em>Projected Scores:</em> 114.82 to 102.19</p>
                    <p>This is a wildcard battle! Hanah, who reigned supreme atop the standings, faces a sudden twist of fate losing her quarterback and top receiver. Meanwhile, Craig, the patient strategist, has been quietly waiting for L.A. to morph into a healthy fantasy football dream team.
                    </p>
                    <p>Can Hanah's generic team put together a group of offbrand players to strike another victory? Or is Craig a <strong>DARK <em>RAM</em></strong> to win playoffs? </p>

                </div>
                <div className="game-preview">
                    <p>🏈 <strong>RIP</strong></p>
                    <p>This first week of playoffs, we say goodbye to two dear and recently departed league managers. The Unit and El Duderino may not have always been around, but when they were they took some truly inexplicable wins and especially helped continue to kick my useless team's battered carcass further into the dirt. </p>
                    <p>See you in the next <i>live draft.</i></p>
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

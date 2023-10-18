import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 6 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 151.78 pts -- The Passion of the Christ(Ian) (Eric)</h2>
                <h2><strong>👑Top Player Score</strong>: DJ Moore -- 48 pts -- El Duderino (Luke)
                    <em>(DJ, spinning more than just tracks this week! 🎵🌀)</em></h2>
                <h2><strong>👑Biggest Win</strong>: 77.66 pts -- The Maine Event (Craig)
                    <em>(The Lobster pot was boiling hot! 🦞🔥)</em></h2>
                <h2><strong>Fail Snail</strong>: Lucy's Mom has got it going on -- 32 pts short of projections -- Joanna had her eye on the most important prize. A climb in the standings was of no concern compared to this top award. Well done honey.</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 6 recap</h2>
                <p>I've secured last place in my own league. Try to outfail that snail!</p>

            </section>
            <section className='game-previews'>
                <h2>Week 7 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 5.</p>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (1-5-0 | 10th) vs Lucy's Mom has got it going on (1-5-0 | 9th)</strong></p>
                    <p><em>Projected Scores:</em> 107.87 to 99.77</p>
                    <p>Lucy's Head Coach is looking for redemption but Lucy's Mom has got some tricks up her sleeve. Can Kyle pull off an upset, or will Joanna prove that experience is the key? 🔐</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (3-3-0 | 6th) vs The Maine Event (3-3-0 | 5th)</strong></p>
                    <p><em>Projected Scores:</em> 106.09 to 110.28</p>
                    <p>Dean and The Maine Event are neck and neck in the rankings. This matchup will surely be a defining moment for both teams as they vie for dominance. 🏆</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley All Bite (5-1-0 | 1st) vs Hanah's Nifty Team (5-1-0 | 2nd)</strong></p>
                    <p><em>Projected Scores:</em> 107.41 to 115.14</p>
                    <p>The top two giants of the league are going head to head! This will be a showdown for the ages. Can Hanah edge out Bill, or will No Barkley All Bite continue their winning streak? 🌟</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(ian) (4-2-0 | 3rd) vs El Duderino (2-4-0 | 7th)</strong></p>
                    <p><em>Projected Scores:</em> 116.53 to 103.92</p>
                    <p>El Duderino is looking to break their losing streak, but The Passion of the Christ(ian) is a formidable opponent. Will it be redemption for El Duderino, or another win for The Passion of the Christ(ian)? 📜</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(t)o (4-2-0 | 4th) vs The Unit (Dave and Rissa) (2-4-0 | 8th)</strong></p>
                    <p><em>Projected Scores:</em> 103.17 to 77.57</p>
                    <p>Espresso LoPres(t)o seems poised for victory with a strong projected lead. However, The Unit might just have some surprises in store. Will the LoPrestos keep their steam, or will The Unit make a comeback? ☕🚂</p>
                </div>


                <p>Remember, even rushed previews have a special place in our (my) heart(s)! ❤️ Good luck surviving Week 6! 🍀

                </p>
            </section>
            <section className="announcement">
                <h2>Player Lineups and Roster Changes</h2>
                <p>Here’s a brief guide to help you navigate the Yahoo app or desktop version when making those crucial roster decisions:</p>
                <div className="guide">
                    <div className="guide-section">
                        <h3>Mobile App Users</h3>
                        <ul>
                            <li>Go to 'Roster'</li>
                            <li>Click on a player</li>
                            <li>Swap between starters and bench players as necessary</li>
                        </ul>
                    </div>
                    <div className="guide-section">
                        <h3>Desktop Users</h3>
                        <ul>
                            <li>Hover over 'My Team'</li>
                            <li>Click 'Roster'</li>
                            <li>Select the 'Game Day Decision' tab to switch between starters and bench players</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='communications-channel'>
                <h2>Communication Channels</h2>
                <p>Feel free to reach out with any questions or concerns at kjeffreyscs@gmail.com or simply drop a message in the Yahoo chat. Doing so will send an email notification my way. Remember, the app allows you to indulge in friendly banter (or fiery discussions, wink wink) during the games.</p>
            </section>

            <section className="team-name-change-instructions">
                <h2>Changing Your Team Name</h2>
                <p>If you wish to spice things up a bit by changing your team name, follow these steps:</p>
                <ul>
                    <li>Navigate to 'My Team'</li>
                    <li>Click 'Edit Team Info'</li>
                    <li>Enter your cool new name in the dialog box that appears</li>
                </ul>
                <p>And don't fret about anonymity, your real name will be displayed alongside your team name to avoid any confusion.</p>
            </section>

            <section>
                <h2>Injured Reserve Note</h2>
                <p>If you have players with red letters next to them, they may be IR eligible. If they are just questionable and might play, or after a certain amount of weeks, they are not. But while they are, you can essentially put two people on a special IR bench for players who cannot play due to injury for a few weeks. This way, you have extra spots on your team while you pick up other players for current matches.</p>

                <p>However, this feature is reserved exclusively for injured players. If you're uncertain, try placing up to two players with red letters next to their names on IR. If the option isn't available, they are not eligible, indicating that they are likely a game-time decision and might still play. Feel free to message me if you're unsure about a specific player's eligibility or need assistance with this feature.</p>
            </section>

            <footer>
                <p>Gear up and may the best teams win! Let's get this season rolling!</p>
                <p>Best,<br />Kyle, Your Dedicated Commissioner</p>
            </footer>
        </div>
    );
}

export default WelcomeMessage;

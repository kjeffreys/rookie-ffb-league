import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 8 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 175.12 pts -- The Passion of the Chris(ian)
                </h2>
                <h2><strong>👑Top Player Score</strong>: CeeDee Lamb -- 35 pts -- Lucy's Mom has got it going on
                </h2>
                <h2><strong>👑Biggest Win</strong>: 60.74 pts -- The Passion of the Christ(ian)
                </h2>
                <h2><strong>Fail Snail</strong>: The Maine Event -- Craig fell 29.98 pts short of projection, brutal injuries... 🐌</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 8 recap</h2>
                <p>Still a tight race. Bad week for QBs and thus their teams. </p>
                <p>Hang in there!</p>

            </section>
            <section className='game-previews'>
                <h2>Week 9 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 8!</p>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (3-5-0 | 8th) vs Dean's Definitive Team (4-4-0 | 5th)</strong></p>
                    <p><em>Projected Scores:</em> 100.73 to 111.77</p>
                    <p>This just in: Sunday's forecast predicted scattered dad jokes with a chance of playful jabs. Will Kyle earn bragging rights before Thanksgiving time? Or will Dean being sending his favorite (and yes, only) son-in-law to eat at the kiddie table?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley All Bite (6-2-0 | 1st) vs The Passion of the Christ(ian) (5-3-0 | 3rd)</strong></p>
                    <p><em>Projected Scores:</em> 122.32 to 105.74</p>
                    <p>They've shared many good times, but which one of these friends will have the last laugh this weekend and claw their way towards the top of the standings?
                    </p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (2-6-0 | 9th) vs El Duderino (4-4-0 | 6th)</strong></p>
                    <p><em>Projected Scores:</em> 86.39 to 86.94</p>
                    <p>Youngest vs oldest. Sibling vs sibling. Parent vs parent. Remarkable achiever vs remarkable achiever. etc.
                    </p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(to) (5-3-0 | 4th) vs Hanah's Nifty Team (5-2-0 | 2nd)</strong></p>
                    <p><em>Projected Scores:</em> 98.82 to 111.45</p>
                    <p>Hanah held the fleeting top spot for one sweet week and then it was gone! Will she reclaim it this week? Alicen and Chris have an espressNO to that about that!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Maine Event (3-5-0 | 7th) vs The Unit (Dave and Rissa) (2-6-0 | 10th)</strong></p>
                    <p><em>Projected Scores:</em> 77.18 to 89.74</p>
                    <p>
                        Dave and Carissa regained control of their lineup last week. But it wasn't enough to overcome key injuries. A tale Craig had to endure indirectly to his key stars. Someone will be granted a kindness and mercy with a victory this week, but who? Whom? Who...
                    </p>
                </div>

                <p>
                    Best of luck to all in week 9!
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

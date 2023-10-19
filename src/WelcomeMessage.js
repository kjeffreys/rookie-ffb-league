import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 6 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 134.06 pts -- Espresso LoPres(t)o</h2>
                <h2><strong>👑Top Player Score</strong>: Raheem Mostert -- 33.7 pts
                </h2>
                <h2><strong>👑Biggest Win</strong>: 61.78 pts -- No Barkley All Bite (Bill)
                </h2>
                <h2><strong>Fail Snail</strong>: Lucy's Head Coach (Kyle) -- 30 pts short of projections 🐌</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 6 recap</h2>
                <p>So...many...injuries</p>

            </section>
            <section className='game-previews'>
                <h2>Week 7 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 5.</p>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (1-5-0 | 10th) vs Lucy's Mom has got it going on (1-5-0 | 9th)</strong></p>
                    <p><em>Projected Scores:</em> 107.87 to 99.77</p>
                    <p>In the most wholesome showdown ever, the sweetest couple in the league faces off! Who will win? Who cares! Either way, Lucy's family takes home the victory. 🥰</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (3-3-0 | 6th) vs The Maine Event (3-3-0 | 5th)</strong></p>
                    <p><em>Projected Scores:</em> 106.09 to 110.28</p>
                    <p>Dean and The Maine Event are neck and neck in the rankings. This matchup will surely be a defining moment for both teams as they vie for dominance. 🏆</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley All Bite (5-1-0 | 1st) vs Hanah's Nifty Team (5-1-0 | 2nd)</strong></p>
                    <p><em>Projected Scores:</em> 107.41 to 115.14</p>
                    <p>While the rest of us thought we were kids in a candy shop, Bill and Hanah just bulldozed the place with the kids inside. Now they will have to see what happens when they matchup against another great power and determine the frontrunner of the league. </p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(ian) (4-2-0 | 3rd) vs El Duderino (2-4-0 | 7th)</strong></p>
                    <p><em>Projected Scores:</em> 116.53 to 103.92</p>
                    <p>El Duderino needs a little less chill, while Eric has the passion but maybe a little less Christian McCaffrey this week.</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(t)o (4-2-0 | 4th) vs The Unit (Dave and Rissa) (2-4-0 | 8th)</strong></p>
                    <p><em>Projected Scores:</em> 103.17 to 77.57</p>
                    <p>Espresso LoPres(t)o seems poised for victory with a strong projected lead. Can The Unit's phantom team pull a Halloween upset? Or ill the LoPrestos keep their steam? </p>
                </div>


                <p>Best of luck to all in week 7!
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

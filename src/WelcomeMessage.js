import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 9 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 168.4 pts -- Lucy's Mom has got it going on
                </h2>
                <h2><strong>👑Top Player Score</strong>: C.J. Stroud -- 42.8 pts -- Lucy's Mom has got it going on
                </h2>
                <h2><strong>👑Biggest Win</strong>: 100.4 pts -- Lucy's Mom has got it going on
                </h2>
                <h2><strong>Fail Snail</strong>: Hanah's Nifty Team -- Hanah fell 26 pts short of projection. No idea how 🐌</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 9 recap</h2>
                <p>There are definitely two halves of the standings. </p>
                <p>Playoff seeding is starting to take place!</p>
            </section>

            <section className='game-previews'>
                <h2>Week 10 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 8!</p>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley All Bite (6-3-0 | 2nd) vs The Maine Event (4-5-0 | 6th)</strong></p>
                    <p><em>Projected Scores:</em> 109.08 to 99.47</p>
                    <p>Bill has 6 wins. 3 losses. Both are multiples of 3. He's in 2nd place. Craig is in 6th place. 6 is divisible by 3. </p>
                    <p>Pretty sure Craig is about to end up with 9 wins and Bill is going to have an aneurysm.</p>
                    <p>Math. Also don't have an aneurysm, Bill!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(ian) (6-3-0 | 1st) vs Espresso LoPres(t)o (6-3-0 | 3rd)</strong></p>
                    <p><em>Projected Scores:</em> 107.45 to 83.34</p>
                    <p>I haven't looked at their lineups recently, but these two opponents must be wielding more healthy knees than a robotic millipede. Barring any electrical storms, this should be a high scoring bout!</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (3-6-0 | 8th) vs The Unit (Dave and Rissa) (2-7-0 | 10th)</strong></p>
                    <p><em>Projected Scores:</em> 110.62 to 102.26</p>
                    <p>Despite their place in the standings, these two teams have had some massive wins this season. Which one of these friends will go on an early splurge to kick off the holiday season?</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (3-6-0 | 9th) vs El Duderino (4-5-0 | 7th)</strong></p>
                    <p><em>Projected Scores:</em> 105.00 to 67.56</p>
                    <p>Luke and Kyle...who's points look more like the years of 20th century wars than winning scores of late... /p>
                    <p>But someone will win. So, yea!</p>
                </div>
                <div className="game-preview">a
                    <p>🏈 <strong>Dean's Definitive Team (5-4-0 | 5th) vs Hannah's Nifty Team (6-3-0 | 4th)</strong></p>
                    <p><em>Projected Scores:</em> 105.65 to 114.61</p>
                    <p>Picture one gladiator who clobbers his crippled son-in-law with a mace, and one other viking who burns her gracious hosts hospitable offerings to cinders. And now they get to face each other! </p>
                </div>

                <p>
                    Best of luck to all in week 10!
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

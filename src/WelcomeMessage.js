import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 7 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 144.56 pts -- Dean's Definitive Team
                </h2>
                <h2><strong>👑Top Player Score</strong>: Patrick Mahomes -- 35.86 pts -- El Duderino
                </h2>
                <h2><strong>👑Biggest Win</strong>: 28.26 pts -- El Duderino
                </h2>
                <h2><strong>Fail Snail</strong>: Lucy's Mom has got it going on -- Joanna fell 27 pts short of projection, injuries... 🐌</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 7 recap</h2>
                <p>What an exciting week! By far the most changes in gametime leads, and the closest matches of a week so far. Perhaps our parity will only intensify?</p>
                <p>But methinks not</p>

            </section>
            <section className='game-previews'>
                <h2>Week 8 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 8!</p>
                <p>...one of the downsides of getting doing previews by Tuesday is no one has set lineups and the predictions are way off. One of the fun parts is <em> no one has set lineups and the predictions are way off.</em> <strong>Onward!</strong>
                </p>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (4-3-0 | 5th) vs Lucy's Mom has got it going on (1-6-0 | 10th)</strong></p>
                    <p><em>Projected Scores:</em> 99.50 to 98.94</p>
                    <p>Dean managed to re<em>Grupe</em> and had his opponent eating out of the <em>Palmer</em> his hand last week with a huge win last week. The biggest win in fact.
                    </p>
                    <p>Meanwhile, Joanna's star RB has been more heckler than <em>Eckler</em> with a lame ankle.
                    </p>
                    <p>Will Joanna's team rebound? Or be a <em>Lamb</em> to the slaughter? Tune in for the epic father-daughter battle!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley All Bite (5-2-0 | 2nd) vs Espresso LoPres(t)o (5-2-0 | 3rd)</strong></p>
                    <p><em>Projected Scores:</em> 120.98 to 105.95</p>
                    <p>Bill limped away from last week's bout in a narrow defeat, but he's looking to <em>Waddle</em> his way back to the top!
                    </p>
                    <p>Alternatively, the LoPresto's are still on a hot streak, and they are looking to <em>Cook</em> up another <em>Rice</em> victory!</p>
                    <p>Keep an eye on this one, the winner is vying for the top of the standings!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(ian) (4-3-0 | 4th) vs The Unit (Dave and Rissa) (2-5-0 | 9th)</strong></p>
                    <p><em>Projected Scores:</em> 120.31 to 99.06</p>
                    <p>The Unit played half a team</p>
                    <p>Eric played half a running back</p>
                    <p>Both teams nearly got away with it! Will Eric kick some <em>Butker</em>? Or he is ripe for <em>Pickens</em>?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Maine Event (3-4-0 | 6th) vs El Duderino (3-4-0 | 7th)</strong></p>
                    <p><em>Projected Scores:</em> 114 to 112.45</p>
                    <p>
                        Luke called <em>Gibbs</em> on a resounding win last week
                    </p>
                    <p>While Craig was left with a <em>Kupp</em> half empty ... or full? Because now this matchup is a little more interesting with a tie in the standings!</p>
                    <p>Will Craig be King of the <em>Hill</em>? Or will Luke celebrate with <em>Mahomes</em>?</p>

                </div>


                <p>Best of luck to all in week 8!
                </p>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (2-5-0 | 8th) vs Hanah's Nifty Team (6-1-0 | 1st)</strong></p>
                    <p><em>Projected Scores:</em> 107.25 to 118.52</p>
                    <p>Hanah may be the best manager in the league right now, but she almost lost without her Foreman at the helm last week. That said, I'm not sure if Hanah is a Swiftee, but she's probably a Kelcee after he singlehandedly saved the day and helped her take sole possession of first place.</p>
                    <p>On the flip side, Kyle has been having some wholesome, quality bonding time with Joanna in the 'basement' of the standings. And this week he's hoping he can bounce back if his first round draft pick running back can recover from an unannounced...headache? Maybe a little pep talk or a soothing lullaby? Perhaps Joanna and Kyle's cozy matchup will bring him peace.</p>
                    <p>
                        Either way! This David vs Goliath matchup is sure to have us on the edge of our seats!
                    </p>
                </div>

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

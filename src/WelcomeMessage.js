import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 2 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 147.72 pts -- Bill's team, No Barkley No Bite</h2>
                <h2><strong>👑Top Player Score</strong>: Daniel Jones -- 32.74 pts -- (No Barkley No Bite's team)</h2>
                <h2><strong>👑Biggest Win</strong>: 28 pts -- El Duderino (Luke)</h2>
                <h2><strong>Fail Snail</strong>: Lucy's Head Coach (Kyle) coming 9 pts short of projection</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 2 recap</h2>
                <p>Only 2 weeks done and a lot of parity in the standings. Hang in there!</p>

            </section>
            <section className='game-previews'>
                <h2>Week 3 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 3.</p>

                <div className="game-preview">
                    <p>🏈 <strong>Eric's Endzone Game (Eric) (1-1) vs The Maine Event (Craig) (0-2)</strong></p>
                    <p><em>Projected Scores: 121.98 - 114.88</em></p>
                    <p>Great things come from Maine, and this week, both Eric and Craig are set to prove it. As the <strong>Rivaly of the Week</strong> heats up, who will get the chance to celebrate the other's victory? Stay tuned!</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (Kyle) (1-1) vs No Barkley No Bite (Bill) (2-0)</strong></p>
                    <p><em>Projected Scores: 108 - 125</em></p>
                    <p>This game figures to be less of a rivalry and more of a meat grinding. Kyle, who couldn't beat a lineup with sat out players last week, is hoping for mercy from Bill. Will Bill be merciful? No, he will not. Look away.</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (Dean) (0-2) vs The Unit (Dave and Rissa) (1-1)</strong></p>
                    <p><em>Projected Scores: 107 - 85</em></p>
                    <p>Dean is gearing up to wallop The Unit with the power of statistics, as he is projected to take the win this week. Meanwhile, Dave and Rissa showcased style by beating Kyle even with a player sitting out. Can they win with one hand tied behind their back again? Or will math seize the day?</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (Joanna) (1-1) vs Espresso LoPrest(t)o (Alicen/Chris) (1-1)</strong></p>
                    <p><em>Projected Scores: 108 - 115</em></p>
                    <p>They're just too nice. I have no spice. To be continued...</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>El Duderino (Luke) (1-1) vs Hanah's Nifty Team (Hanah) (2-0)</strong></p>
                    <p><em>Projected Scores: 120 - 107</em></p>
                    <p>Hanah is sitting atop the standings with only Bill sharing a 2-0 record. But Luke turned into a juggernaut against his own kin last week and is aiming to continue his streak. A battle not to be missed!</p>
                </div>



                <p> Keep up the good fight all! I'll keep the information from last week below in case anyone needs it. Also message in yahoo chat and people in the app's chat can see/give advice/ignore you like they ignore my wonderful recaps! Good luck.</p>
            </section>
            <section className="announcement">
                <h2>Player Lineups and Roster Changes</h2>
                <p>Today is Wednesday, everyone! The first game of the season is just on the horizon, with Chiefs and Lions players kicking off tomorrow night. Yes, that's Thursday! While most of the games are scheduled for Sunday, it's wise to check and set your lineup by Wednesday to avoid any last-minute rushes. Here’s a brief guide to help you navigate the Yahoo app or desktop version when making those crucial roster decisions:</p>
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

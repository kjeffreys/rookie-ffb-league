import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 5 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 151.78 pts -- The Passion of the Christ(Ian) (Eric)</h2>
                <h2><strong>👑Top Player Score</strong>: DJ Moore -- 48 pts -- El Duderino (Luke)
                    <em>(DJ, spinning more than just tracks this week! 🎵🌀)</em></h2>
                <h2><strong>👑Biggest Win</strong>: 77.66 pts -- The Maine Event (Craig)
                    <em>(The Lobster pot was boiling hot! 🦞🔥)</em></h2>
                <h2><strong>Fail Snail</strong>: Lucy's Mom has got it going on -- 32 pts short of projections -- Joanna had her eye on the most important prize. A climb in the standings was of no concern compared to this top award. Well done honey.</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 5 recap</h2>
                <p>So many injuries. So many upsets! And so many upsetting injuries... The war of attrition is on!</p>

            </section>
            <section className='game-previews'>
                <h2>Week 6 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 5.</p>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (Kyle) (1-4) vs The Maine Event (Craig) (2-3)</strong></p>
                    <p><em>Projected Scores:</em> 120 to 119</p>
                    <p>Should be close 🧐. Craig is on a two-game win streak 🚀 and recovered his early season dead stars 💫. But can Kyle remind him that gravity is relentless 🪐? (Hitting them with the astrophysics jokes 🤣! Make sure to delete this part before they see what my first recaps look like 🤫)
                    </p>

                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (Dean) (2-3) vs The Passion of the Christ(Ian) (Eric) </strong></p>
                    <p><em>Projected Scores:</em> 110 to 121</p>
                    <p>Both managers embarked on a fantasy voyage, but only one can steer the ship back to the cherished Isle of Victory 🏝️.
                    </p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley All Bite (Bill) (4-1) vs The Unit (David and Carissa) (2-3)</strong></p>
                    <p><em>Projected Scores:</em> 121 to 70</p>
                    <p>Bill, the gentle giant of the league, whose approach to the game is as kind as it is strategic, is peering down a seemingly breezy path 🌬️ against The Unit, whose management has been a bit... laissez-faire 🙃. Can The Unit muster a miracle ✨, or will Bill politely tiptoe 🩰 to another victory 🏆?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (Joanna) (1-4) vs Hanah's Nifty Team (Hanah) (4-1)</strong></p>
                    <p><em>Projected Scores:</em> 102 to 111</p>
                    <p>In a heartwarming matchup, childhood pals clash in a battlefield of pleasantries. Expect polite tackles and courteous touchdowns as one lifelong friend might just gift-wrap a win for the other. 🎁🏈</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(t)o (The LoPrestos) (3-2) vs El Duderino (Luke) (2-3)</strong></p>
                    <p><em>Projected Scores:</em> 116 to 114</p>
                    <p>From the shivering plains of Buffalo, The LoPrestos look to steamroll through Luke, who’s just buzzed off his recent royal takedown. Will the northerners freeze him out, or will Luke serve them a bitter defeat to mull over? 🌨️☕</p>

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

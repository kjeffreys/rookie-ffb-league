import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 3 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 165.56 pts -- Hanah's Nifty Team (Hanah's team, but you already knew that)</h2>
                <h2><strong>👑Top Player Score</strong>: De'Von Achane -- 53.3 pts -- (no one had him, b/c that would be crazy as there was no indication he'd ever play until he did)</h2>
                <h2><strong>👑Biggest Win</strong>: 34 pts -- Dean's Definitive Team (Dean)</h2>
                <h2><strong>Fail Snail</strong>: Honestly most people beat or neared projections so we'll wait for a bigger flop in week 4. Fail harder if you want recognition!</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 3 recap</h2>
                <p>Had family in town and job stuff going on. My apologies for the delay. Bill and Hanah remain the undefeated monarchs of the league, almost everyone has received their first win (sorry Craig), and the season remains long. Be the tortoise, not a lousy hare.</p>

            </section>
            <section className='game-previews'>
                <h2>Week 4 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 4.</p>

                <div className="game-preview">
                    <p>🏈 <strong>El Duderino (Luke) (1-2) vs The Unit (Dave and Rissa) (1-2)</strong></p>
                    <p><em>Projected Scores: 115.34 - 80.33</em></p>
                    <p>Luke might have had the weaker running back in Thursday's game, but he's still the favorite in this match, mainly by showcasing a complete roster of eligible players. It's a bold strategy! But will it pay off?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Maine Event (Craig) (0-3) vs Hanah's Nifty Team (guess who) (3-0)</strong></p>
                    <p><em>Projected Scores: 112 - 114</em></p>
                    <p>Hanah's team has been outperforming projections considerably, adding intrigue to this matchup. However, a challenging Thursday saw her two running backs almost negating each other. Contrastingly, Craig is still awaiting a stroke of luck, with his QB Goff securing a win primarily by abstaining from throwing. Both managers have a pivotal player languishing on injured reserve, adding another layer to the unfolding drama. Will projections, records, or any statistical insights have a say in this encounter?</p>
                    <p>Seems unlikely</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(ian) (Eric) (2-1) vs Lucy's Mom has got it going on (Joanna) (1-2)</strong></p>
                    <p><em>Projected Scores: 124 - 108</em></p>
                    <p>Eric's stars like Burrow seem to be regrowing functional calves just in the nick of time for this matchup. Jo's stars are still stuck somewhere off the field, scootching along with walkers. Can Jo defy projections and and reclaim her winning ways? Or is the power of bipedal quarterbacks too strong? Stay tuned.</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (Dean) (1-2) vs No Barkley No Bite (Bill) (3-0)</strong></p>
                    <p><em>Projected Scores: 111 - 128</em></p>
                    <p>Bill stumbled and proverbially stubbed his toe in the projections last week. But Kyle's defense was so bad they kept giving him negative points even after the week ended. Yes, really.</p>
                    <p>So Bill marches on undefeated, walking right into the trap of Dean's team coming off their first victory. Underdog and momentum is a dangerous combo, but then again Juju Smith-Schuster is a bold play.</p>
                    <p>Is bold the right word?</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (Kyle) (1-2) vs Espresso LoPres(t)o (LoPresto) (2-1)</strong></p>
                    <p><em>Projected Scores: 117 - 108</em></p>
                    <p>Kyle is reeling on a two game loss streak. He tried to stop the bleeding from Trevor Lawrence throwing to handless stubs of receivers with a trade offer for captain Kirk, but it seems impossible to obtain him from the Cousins (see what I did there). Thankfully Kyle enacted a new plan to pick up tight end, potentially sealing his fate in one play Thursday night with an injury to Luke MusGRAVE. The projections still look close, but it seems the LoPrestos are off to a big headstart, and right near the top of the standings with another win.</p>
                </div>



                <p> Keep up the good fight all! I'll keep the information from below in case anyone needs it. Also message in yahoo chat and people in the app's chat can see/give advice/ignore you like they ignore my wonderful recaps! Good luck!</p>
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

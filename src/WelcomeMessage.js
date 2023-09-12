import React from 'react';
import './WelcomeMessage.css';

function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 1 Awards!</h1>
                <p><em>Top Score</em>: Lucy's Mom has got it going on (Joanna)</p>
                <p><em>Most ridiculous player</em>: The Unit's defense--Dallas--scored 37 points and mentally broke the Giants</p>
                <p>Let me know if there are other weekly awards we should track</p>
            </div>

            <section className="announcement">
                <h2>Week 1 recap</h2>
                <p>Many upsets this week (mostly people upset with Yahoo's first week projections). But the predictions and the performances will likely bounce back this week. If you are worried and feel you need waiver wire help, feel free to message and poll for advice.</p>
                <p>Granted, you are asking for advice from your opponents...but...yeah I have nothing.</p>
            </section>
            <section className='game-previews'>
                <h2>Week 2 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 2.</p>
                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (0-1) vs El Duderino (0-1)</strong></p>
                    <p><em>Predicted scores: 111 - 117</em></p>
                    <p>Father versus son. Dean's Definitive Team goes head-to-head with El Duderino. Dean's been trying to swap Dak Prescott with the Dallas defense since they scored more last week, while Luke's star-studded lineup took a humble pie to the face last week. Will the <strong>RIVALRY</strong> of the week see the dad school the son, or will youth prevail? Stay tuned!</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (1-0) vs The Unit (0-1)</strong></p>
                    <p><em>Predicted scores: 108 - 95</em></p>
                    <p>The scores may be misleading as lineups aren't set yet. But with the clash of head coach vs. unit, it's the battle of coacher versus the coachees!</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>No Barkley No Bite (1-0) vs Lucy's Mom has got it going on (1-0)</strong></p>
                    <p><em>Predicted scores: 116 - 111</em></p>
                    <p>Two people who gained from Cooper Kupp's injury last week. Bill managed to kick Craig while he was down, while Joanna elected to reincarnate Kupp as her secret weapon in the form of Brandon Aiyuk. But with two winners pitted against each other, who will be the new sacrifice?</p>
                </div>
                <div className="game-preview">
                    <p>🏈 <strong>Eric's Endzone Endgame (1-0) vs Hanah's Nifty Team (1-0)</strong></p>
                    <p><em>Predicted scores: 121 - 106</em></p>
                    <p>Eric dodged defeat last week, while Hanah managed to turn the tables after a Kelce catastrophe. Someone's victories are at an end. NOTE: Someone's autogenerated name is a bit generic for these recaps ya know... Of course I know. I'm the only one writing/reading any of this...</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(t)o (0-1) vs The Maine Event (0-1)</strong></p>
                    <p><em>Predicted scores: 117 - 112</em></p>
                    <p>Alicen and Chris were served a bitter cup last week with the Bills' blunder. Craig is looking to get this show back on the road. Someone will be perking up with their first victory!</p>
                </div>


                <p>Week 1 had some surprises, but remember it's a long season. I'll keep the information from last week below in case anyone needs it. Also message in yahoo chat and people in the app's chat can see/give advice/ignore you like they ignore my wonderful recaps! Good luck.</p>
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

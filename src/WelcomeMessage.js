import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 4 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 142.76 pts -- No Barkley No Bite (Bill)</h2>
                <h2><strong>👑Top Player Score</strong>: Christian McCaffrey -- 45.2 pts -- Passion of the Christ(Ian) (Eric)</h2>
                <h2><strong>👑Biggest Win</strong>:39 pts -- No Barkley No Bite (Bill)</h2>
                <h2><strong>Fail Snail</strong>: Hanah's Nifty Team -- Hanah edged out Kyle with the biggest fail by 2 points, falling 26 points short of projection overall. With her first loss, Hanah continues to find victory!</h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 4 recap</h2>
                <p>Well, that was week 4. No doubt about it. Moving on!</p>

            </section>
            <section className='game-previews'>
                <h2>Week 5 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 5.</p>
                <div className="game-preview">
                    <p>🏈 <strong>Hanah's Nifty Team (yup) (3-1) vs The Unit (Dave and Rissa) (2-2)</strong></p>
                    <p><em>Projected Scores: 72 - 70</em></p>
                    <p>Welcome, folks, to the <strong>Rivalry of the Week</strong>— where less is more, and showing up is, well... optional? 😆 This isn't just any regular match-up. It's the clash of the Fantasy Football Phantom and the Master of Minimalism!</p>
                    <p>First up: Hanah. The rookie sensation we all aspired to be, consistently outpacing her projections and starting out on a 3 game win streak until falling short last week. But this week, she's facing the Bye-Week Monster. Can she pull some waiver wire wizardry to regain the momentum? Will there be enough room on that roster?</p>
                    <p>Then we have The Unit. Dave's busy diagnosing in med school while Rissa’s shaping young minds with speech therapy, and yet, their fantasy team has magically managed to win two games despite their absentee landlords. Clearly they’ve tapped into some Zen mastery, showing that sometimes, doing nothing is the best move!</p>
                    <p>Will Hanah's wire waivering overcome The Unit's zen calm, or will David and Rissa continue to accidentally (or is it?) show us how to win by doing the absolute minimum? It's Rookie Resourcefulness vs Medical Meditation!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(Ian) (Eric) (3-1) vs Lucy's Head Coach (Kyle) (1-3)</strong></p>
                    <p><em>Projected Scores: 110-108</em></p>
                    <p>I may have given too much credit to Joe Burrow calling him bipedal after all. Thankfully for Eric, McCaffrey is apparently an arachnid, because that animal scored eight players worth of points by himself last week. A.J. Brown also got in on the metaphor, realizing he's an Eagle so his points flew high to the sky.</p>
                    <p>Meanwhile, the only "Walker" on Kyle's team is on bye. If someone on his roster can't wear multiple hats as an exterminator and hunter for this match, it could turn ugly.</p>
                    <p>Will Eric continue ascending in the rankings? Or will Kyle grow feet to plant and stop his slide?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (Dean) (1-3) vs Espresso LoPres(t)o (Alicen/Chris) (3-1)</strong></p>
                    <p><em>Projected Scores: 98 - 102</em></p>
                    <p>It was a good day in Buffalo last week, for players, the team, the fans, and these fantasy players. The LoPrestos had a mix of success with their roster, but Josh Allen lead their fantasy team and they will be hoping he can repeat that performance.</p>
                    <p>On the flipside Dean's team laid dormant last week in defeat, but perhaps he's waiting in volcano fashion for a catastrophic upset.</p>
                    <p>Will the underdog erupt? Or will the LoPrestos herd keep roaming strong?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley No Bite (Bill) (4-0) vs El Duderino(Luke) (1-3)</strong></p>
                    <p><em>Projected Scores: 120 - 108</em></p>
                    <p>Bill lives in New York and is a Giants fan last time I checked. But he has salvaged joy from the success of all his teams nemeses, watching their key players crush and bring his team to the now sole undefeated status in the league.
                    </p>
                    <p>
                        Luke, a Virginia realtor, has been waiting for his star players like Patrick Mahomes to close on some victories.
                    </p>
                    <p>Will Bill continue to enjoy the paradox of fantasy loyalty vs real teams with another win? Or can Luke deal a bad loss during the first week of byes. </p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (Joanna) (1-3) vs The Maine Event (Craig) (1-3)</strong></p>
                    <p><em>Projected Scores: 102 - 107</em></p>
                    <p>From the scenic beauty of Maine, we have Craig, the 'lobster' of Week 4, who clawed his way to his first victory, breaking his shell and hoping to steamroll further (I avoided lobster Maine references as long as I could). As he eagerly anticipates the return of his favorite player, Cooper Kupp, he looks for this to be the turning tide for him.</p>
                    <p>Meanwhile, Joanna is channeling all her skills to prep her team. Three narrow losses would test anyone’s resolve, but this mental health guru knows a thing or two about resilience. With stars emerging from her roster, she is looking to mindfully craft a healthy victory.</p>
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

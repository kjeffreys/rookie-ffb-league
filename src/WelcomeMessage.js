import React from 'react';
import './WelcomeMessage.css';

function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Hello Fellow Rookies,</h1>
                <p>Welcome to the first exhilarating week of the Rookie Roundup league, where amateurs and seasoned professionals alike unite in the glorious pursuit of fantasy football supremacy!</p>
            </div>
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

            <section className='game-previews'>
                <h2>Week 1 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 1.</p>
                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (Kyle) vs El Duderino (Luke)</strong></p>
                    <p><em>Predicted scores: 114 - 119</em></p>
                    <p>A titanic clash to kick off the season! Will Lucy's Head Coach show El Duderino who the real Dude is or will Luke get Kyle demoted to Lucy's Assistant Coach? (which we all know he really is)</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (Dean) vs Hanah's Nifty Team</strong></p>
                    <p><em>Predicted scores: 110.9 - 110.6</em></p>
                    <p>Seems like Dean and Hanah spent a little too much time scrutinizing their teams instead of coming up with snazzy team names! This is a nail-biter in the making with a difference of mere decimals!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>No Barkley No Bite (Bill) vs The Maine Event (Craig)</strong></p>
                    <p><em>Predicted scores: 123 - 119</em></p>
                    <p>This is touted to be the highest scoring clash of the week. With 'No Barkley, does Bill still have a strong bite, or is he just fodder for The Maine Event’s upset? A thrilling encounter awaits!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Eric's Endzone Endgame (Eric) vs Espresso LoPres(t)o (Alicen/Chris)</strong></p>
                    <p><em>Predicted scores: 120 - 119</em></p>
                    <p>Will Eric's strategic "endgame" maneuvers score a win against the caffeine-fueled rush of Espresso LoPres(t)o? Or will Alicen and Chris brew up a storm, leaving Eric in the froth? Get ready for a high-octane game!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has Got it Going On (Joanna) vs The Unit (Dave and Rissa)</strong></p>
                    <p><em>Predicted scores: 113 - 109</em></p>
                    <p>Joanna's team seems to have an edge in the predictions, but will "The Unit" of Dave and Rissa show that two heads are indeed better than one? Or will Lucy's Mom continue to have it going on, right from week 1? It's a battle of wits and strategy!</p>
                </div>


                <p>It seems we have some close favorites for week 1, but everyone knows upsets are bound to happen (looking at you Luke 😉).</p>
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

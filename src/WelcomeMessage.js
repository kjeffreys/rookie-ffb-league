import React from 'react';
import './WelcomeMessage.css';
import snailGif from './images/trigger-happy-tv-snail.gif';


function WelcomeMessage()
{
    return (
        <div className="container">
            <div className="header">
                <h1>Week 10 Awards!</h1>
                <h2><strong>👑Top Team Score</strong>: 150.36 pts -- Lucy's Head Coach
                </h2>
                <h2><strong>👑Top Player Score</strong>: C.J. Stroud -- 42.8 pts -- Lucy's Mom has got it going on
                </h2>
                <h2><strong>👑Biggest Win</strong>: 64.76 pts -- Lucy's Head Coach
                </h2>
                <h2><strong>Fail Snail</strong>: 🐌 No Barkley All Bite 🐌 -- Bill fell 12 pts short of projection. So it seems everyone did well vs. projections this week honestly... </h2>
                <img src={snailGif} alt="Snail GIF" style={{ width: '100px', height: '100px' }} />

            </div>

            <section className="announcement">
                <h2>Week 10 recap</h2>
                <p>
                    We're close now. Very close
                </p>
            </section>

            <section className='game-previews'>
                <h2>Week 11 Game Previews</h2>
                <p>Alright, now for the fun part! Here's a preview of the epic battles lined up for Week 11!</p>

                <div className="game-preview">
                    <p>🏈 <strong>Dean's Definitive Team (5-5-0 | 5th) vs El Duderino (4-6-0 | 9th)</strong></p>
                    <p><em>Projected Scores:</em> 98.03 to 100.49</p>
                    <p>In our <strong>RIVALRY OF THE WEEK</strong>, it’s the classic David vs. Goliath, if David was mildly disinterested and Goliath had a middle of the pack resume. Watch as these two fantasy juggernaut--ish--opponents...collide.</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Espresso LoPres(t)o (7-3-0 | 1st) The Maine Event (5-5-0 | 6th)</strong></p>
                    <p><em>Projected Scores:</em> 98.42 to 118.69</p>
                    <p>Craig's team is living up to their namesake, finishing out this show with a big finale.</p>
                    <p>Meanwhile, first place is starting to look like the Defense Against the Dark Arts position. But the LoPresto's are looking to extend their tenure with another victory.</p>
                    <p>Who's will end up pulling some a magical victory out this weekend?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Mom has got it going on (4-6-0 | 7th) vs No Barkley All Bite (6-4-0 | 4th)</strong></p>
                    <p><em>Projected Scores:</em> 100.68 to 109.74</p>
                    <p>One has all bite, one has a little kick. It's the battle of sass!</p>
                    <p> But who will kick some...football!</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>Lucy's Head Coach (4-6-0 | 8th) vs The Unit (2-8-0 | 10th)</strong></p>
                    <p><em>Projected Scores:</em> 104.48 to 97.11</p>
                    <p>In a world where ladders are no longer for climbing and are now being used as less than ideal floatation devices, who will stop sinking into the depths of 'there's always next season'?</p>
                </div>

                <div className="game-preview">
                    <p>🏈 <strong>The Passion of the Christ(ian) (6-4-0 | 3rd) vs Hanah's Nifty Team (7-3-0 | 2nd)</strong></p>
                    <p><em>Projected Scores:</em> 121.53 to 116.42</p>
                    <p>Both managers enjoyed a breath at the top of the mountain. But who will make recover and who will be left as a popsicle on the side of the mountain?</p>
                </div>
            </section>


            <p>
                Best of luck to all in week 11!
            </p>



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

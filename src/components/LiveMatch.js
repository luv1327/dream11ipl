import React from 'react'
import '../LiveMatch.css'
import axios from 'axios'

function LiveMatch(props) {
    const options = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/scorecards.php',
        params: {seriesid: '2514',matchid: `${props.matchId}`},
        headers: {
          'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
          'x-rapidapi-key': 'b30e55a3ffmshaa99da606822151p11f3d9jsnd71d368aa16b'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
    const {awayTeamName,
        homeTeamName,
        matchSummary,
        matchNumber,
        homeScores,
        homeOvers,
        awayScores,
        awayOvers,
        venue} = props;

    return (
        <div className='livematch__container'>
            <div className='top'>
                <p className='match-number'> T20  {matchNumber} OF 56 </p>
                <p>Venue : {venue}</p>
            </div>
            <div>
            </div>
            <div className='livematch'>
            <div className='livematch__hometeam'>
              <h2>{homeTeamName}</h2>
              <p>Score : {homeScores}</p>
              <p> Overs : {homeOvers}</p>
            </div>
            <h1>Vs</h1>
            <div className='livematch__awayteam'>
                <h2>{awayTeamName}</h2>
                <p> Score : {awayScores} </p>
                <p>Overs : {awayOvers}</p>
            </div>
            </div>
            <p>{matchSummary}</p>
        </div>
    )
}

export default LiveMatch

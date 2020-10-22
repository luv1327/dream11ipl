import React from 'react'
import LiveMatch from './LiveMatch'

function LiveMatchData({data,teams}) {
    // const data2 = data.forEach(data=>console.log(data.scores))
    // console.log(teams)
    // const [homeTeamId,setHomeTeamId] = useState(0)
    // const [awayTeamId,setawayTeamId] = useState(0)

    return (
        <div>
            {
                data.map(matches=>(
                    <LiveMatch 
                        awayTeamName={matches.awayTeam.name}
                        homeTeamName={matches.homeTeam.name}
                        matchSummary={matches.matchSummaryText}
                        matchNumber={matches.name}
                        homeScores={matches.scores.homeScore}
                        homeOvers={matches.scores.homeOvers}
                        awayScores={matches.scores.awayScore}
                        awayOvers={matches.scores.awayOvers}
                        venue = {matches.venue.name}
                        key='3'
                        matchId={matches.id}
                    />
                ))
            }
        </div>
    )
}

export default LiveMatchData

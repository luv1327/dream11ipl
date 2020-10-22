import React from 'react'
import Matches from './CompletedMatch'


function CompletedMatchData({data,teams}) {
    // console.log(data)
    // console.log(teams)
    // const [teamId,setTeamId] = useState({})
    // const playedTeams = teams.filter(team=>{
    //     if(team.id === 62){
    //         return team
    //     }else {
    //         return null
    //     }
    // })

    // useEffect(()=>{
    //     const getId = data.map(team=>{
    //         return team
    //     })

    //     console.log(getId)

    // },[])

    // console.log(playedTeams[0])
    return (
        <div>
            <div className='container'>
            <h2 className='title'>Previous Matches</h2>
                <div className='row'>
                    
            {
                data.map(matches=>(
                <Matches 
                    matches ={matches} 
                    key={matches.id}
                    awayTeamName={matches.awayTeam.name}
                    homeTeamName = {matches.homeTeam.name}
                    status={matches.status}
                    matchSummary={matches.matchSummaryText}
                    matchNumber={matches.name}
                    homeScores={matches.scores.homeScore}
                    homeOvers={matches.scores.homeOvers}
                    awayScores={matches.scores.awayScore}
                    awayOvers={matches.scores.awayOvers}
                    venue = {matches.venue.name}
                    homeTeamId={matches.homeTeam.id}
                    awayTeamId={matches.awayTeam.id}
                />
                ))
            }
            </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default CompletedMatchData;

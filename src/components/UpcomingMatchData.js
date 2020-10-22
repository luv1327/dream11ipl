import React from 'react'
import UpcomingMatch from './UpcomingMatch'
import '../UpcomingMatch.css'
function UpcomingMatchData({data}) {
    
    return (
        <div>
            <div className='container'>
                <h2 className='text-center title'>UPCOMING MATCHES</h2>
                <div className='row'>
            {
                data.map(matches=>(
                    <UpcomingMatch
                    matches ={matches} 
                    key={matches.id} 
                    awayTeamName={matches.awayTeam.name}
                    homeTeamName = {matches.homeTeam.name}
                    status={matches.status} 
                    matchSummary={matches.matchSummaryText}
                    matchNumber={matches.name}
                    venue = {matches.venue.name}
                    />
                ))
            }
            </div>
            </div>
        </div>
    )
}

export default UpcomingMatchData


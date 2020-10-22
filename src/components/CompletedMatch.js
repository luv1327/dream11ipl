import React from 'react'
import '../CompletedMatch.css'

function Matches(props) {

    const {awayTeamName,
        homeTeamName,
        matchSummary,
        matchNumber,
        homeScores,
        homeOvers,
        awayScores,
        awayOvers,
        venue,
        // homeTeamId,
        // awayTeamId,
        // home,
        // away,
        // matches
    } = props;

    // console.log(homeScores)

    return (
    <div className='matches col-sm-6 col-md-6 col-lg-4'>
        <div className='match-number'>
        <p>T20  {matchNumber} OF 56 </p>
        </div>
       <div className='bottom'>
       <p className='text-center'> Venue : {venue} </p>
        <div className='home d-flex justify-content-around'>
            <h6 className='bold-font'> {homeTeamName} </h6>
            <p> {homeScores} - {homeOvers} </p>
        </div>
        <hr className='divider'></hr>
        <div className='away d-flex justify-content-around'>
            <h6 className='bold-font'> {awayTeamName} </h6>
            <p> {awayScores} - {awayOvers}</p>
        </div>
        <p className='text-center'>Summary : {matchSummary} </p>
       </div>
    </div>
    )
}

export default Matches

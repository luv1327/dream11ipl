import React from 'react'
import '../UpcomingMatch.css'

function UpcomingMatch(props) {

    const {awayTeamName,
        homeTeamName,
        // status,
        matchSummary,
        matchNumber,
        venue} = props;

    return (
        <div className='upcoming__matches col-sm-6 col-md-6 col-lg-4'>
          <div className='top'>
             <p className='match-number'>T20  {matchNumber} OF 56 </p>
          </div>
          <div className='bottom'>
             <p className='text-center'> Venue : {venue} </p>
        <div className='home d-flex justify-content-around'>
            <h6> {homeTeamName} </h6>
        </div>
            <hr className='upcoming__divider'></hr>
            <div className='away d-flex justify-content-around'>
                <h6 className='bold-font'> {awayTeamName} </h6>
            </div>
        <p className='text-center'>Summary : {matchSummary} </p>
          </div>
        </div>
    )
}

export default UpcomingMatch;


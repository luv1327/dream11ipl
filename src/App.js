import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// Importing Data Components
import CompletedMatchData from './components/CompletedMatchData'
import UpcomingMatchData from './components/UpcomingMatchData';
import LiveMatchData from './components/LiveMatchData';
import Banner from './components/Banner'

function App() {

  const [completed,setCompleted] = useState([])
  const [upcoming,setUpcoming] = useState([])
  const [live,setLive] = useState([])
  const [teams,setTeams] = useState([])

  useEffect(()=>{

    const matchSeries = {
          method: 'GET',
          url: 'https://rapidapi.p.rapidapi.com/matchseries.php',
          params : {seriesid : '2514',completedMatchCount: 0},
          headers: {
            'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
            'x-rapidapi-key': '93eacf6678mshe45933a7181fc89p11d27bjsnde1c82dfb2c3'
          }
        };

    axios.request(matchSeries).then(function (response) {
      const matchesData = response.data.matchList.matches
           console.log(response.data.matchList.matches);
           const isCompleted = matchesData.filter(match=>{
             if(match.status === 'COMPLETED'){
               return match
             }else{
               return null
             }
           })

           const isUpcoming = matchesData.filter(match=>{
            if(match.status === 'UPCOMING'){
              return match
            }else{
              return null
            }
          })
          const isLive = matchesData.filter(match=>{
             return (
              match.currentMatchstate === 'Live' ||match.currentMatchstate === 'Innings Break' || match.status === 'LIVE' ? match : null
             )
          }) 
          setCompleted(isCompleted)
          setUpcoming(isUpcoming)
          setLive(isLive)
          // console.log(matchesData)
      }).catch(function (error) {
        console.error(error);
      });


      // console.log(live,upcoming,completed)

      const seriesTeams = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/seriesteams.php',
        params: {seriesid: '2514'},
        headers: {
          'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
          'x-rapidapi-key': '93eacf6678mshe45933a7181fc89p11d27bjsnde1c82dfb2c3'
        }
      };
      
      axios.request(seriesTeams).then(function (response) {
        setTeams(response.data.seriesTeams.teams)
      }).catch(function (error) {
        console.error(error);
      });

},[])

  return (
      <div className="App">
        <Banner/>
        <LiveMatchData  key='3' data={live} teams={teams}/>
        <CompletedMatchData key='1' data={completed} teams={teams}/>
        <UpcomingMatchData key='2' data={upcoming}/>
      </div>
  );
}

export default App;





// console.log(playingTeamId[0])
// const getId = teams.filter(team=>{
//   // console.log(team.id)
//   if(team.id === playingTeamId){
//       return console.log(team)
//   }else {
//       return null
//   }
// })
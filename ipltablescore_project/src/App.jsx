import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();
        console.log(data); 
        const sortedTeams = data.sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));
        setTeams(sortedTeams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="container">
      <h1>IPL 2022 Points Table</h1>
      <table className="points-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>   
              <td>{team.Matches}</td> 
              <td>{team.Won}</td> 
              <td>{team.Lost}</td> 
              <td>{team.Points}</td> 
              <td>{team.NRR}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

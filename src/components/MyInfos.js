import React from "react"

const styled= {
    margin: '0px auto',
    padding: '10px',
    color: 'green'
  }
  
  function MyInfos() {
    return (
      <div style={styled}>
        <h1>Petar Boshkoski</h1>
        <p>Biography coming soon</p>
        <ol>
          <li>China</li>
          <li>USA</li>
          <li>South Korea</li>
        </ol>
      </div>
    )
  }

  export default MyInfos
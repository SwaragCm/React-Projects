// import { useState } from "react"
import './Dashboard.css'


function ListData({value,addObjectToTable, index, moreData}) {
  
    return (
      <div className="container">
        
            {index < moreData.length && (
            <button className="load-button" onClick={addObjectToTable}>
            Load Data
            </button>
            )}
            {index === Number.MAX_VALUE && (
            <p className="data-loaded-text">Data loaded completely</p>
            )}
        
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default ListData
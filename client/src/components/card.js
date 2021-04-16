import React from "react"
function Card(props) {
    return (
        <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {props.count}</p>
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    )
    }

    export default Card
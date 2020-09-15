import React from "react"

function Joke(props) {
    return(
        <div>
            <h3 style={{display: !props.question && "None"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "gray"}}>Answer: {props.punchLine}</h3>
        </div>
    )
}

export default Joke
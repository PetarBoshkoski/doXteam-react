import React from "react"

function Conditional(props) {
    console.log(props.isLoading)

    return (
    <div>
      <h1>Cool stuff.</h1>
    </div>
    )

}

export default Conditional

/* Conditional Components
    // if(props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    // return (
    //     <h1>Cool stuff.</h1>
    // )
    */
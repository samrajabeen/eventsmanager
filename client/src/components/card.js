import React from "react"
function Card(props) {
  let cardstyle = {
    background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1')"
    }
  return (
    <div className="wrapper-grey padded">
      <div class="container">
        <h1 class="text-center">EVENTS</h1>
        <div class="col-xs-12 col-sm-4">
          <div class="card" style={cardstyle}>
            <div class="card-category">Event Name</div>
            <div class="card-description">
              <h2>Event Date</h2>
              <p>Event time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
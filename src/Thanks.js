import React from 'react'
import thank_you from './images/illustration-thank-you.svg'

function Thanks(props) {
  return (
    <main class="state-main">
        {/* <img src="images\illustration-thank-you.svg" alt="thank-you"> */}
        <img src={thank_you} alt="thank-you"/>
        <div class="you-selected">
          You selected {props.rate} out of 5
        </div>
        <h1 >Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
      </main>
  )
}

export default Thanks
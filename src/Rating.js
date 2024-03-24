import React from 'react'
import icon_star from './images/icon-star.svg'

function Rating(props) {
    function submit(){
        if(props.rate !==0) props.setSubmited(true)
    }
    function vote(num){
        props.setRate(num)
    }
  return (
    <main>
        <div class="cercle">
          <img src={icon_star} alt="icon_star"/>
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
        <div class="numbers">
                {[1, 2, 3, 4, 5].map(num => (
                    <div key={num} className={`cercle ${props.rate === num ? 'selected' : ''}`} onClick={() => vote(num)}>
                        {num}
                    </div>
                ))}
        </div>
        <div class="button" onClick={submit}>SUBMIT</div>
      </main>
  )
}

export default Rating
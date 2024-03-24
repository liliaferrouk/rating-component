import React from 'react';
import Footer from './Footer';
import Rating from './Rating';
import Thanks from './Thanks';


function App() {
  const [submited,setSubmited] = React.useState(false)
  const [rate,setRate]= React.useState(0)

  return (
    <div className="App">
      {submited ? <Thanks rate={rate}/> : <Rating setSubmited={setSubmited} rate={rate} setRate={setRate}/>}
      <Footer/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import data from './data'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const App = () => {
  const [display, setDisplay] = useState(data[0])
  const [reviewPerson, setReviewPerson] = useState(data)

  const previousReview = (id) => {
    /**
     * using the setDisplay((currentReview) => {}) with modulus 
     * gives us the current review. So we don't have to pass the id to get the current index.
     */

    setDisplay((currentReview) => {
      let previousReviewIndex = ((currentReview.id - 1) - 1 + reviewPerson.length) % reviewPerson.length
      if (previousReviewIndex < 0) {
        previousReviewIndex = reviewPerson.length - 1;
      }
      return reviewPerson[previousReviewIndex];
    })

    /**
     * Without modulus and without using the currentReview in setDisplay()
     */
    // var indexValue = reviewPerson.findIndex(person => person.id === id);
    // let previousIndex = indexValue-1;
    // if (typeof reviewPerson[previousIndex] === 'undefined') {
    //    previousIndex = reviewPerson.length-1;
    // }
    // var previous = reviewPerson[previousIndex];
    // setDisplay(previous)
  }

  const nextReview = (id) => {
    if (id > reviewPerson.length - 1) {
      const next = reviewPerson[0];
      setDisplay(next)
      return;
    }
    /**
     * With Modulus operator
     */
    const nextIndex = (id % reviewPerson.length - 1) + 1
    const next = reviewPerson[nextIndex];
    /**
     * Without modules operator
     */
    // const nextIndex = typeof reviewPerson[id] === 'undefined' ? 0 : id++;
    // const next = reviewPerson[nextIndex];
    setDisplay(next)
  }

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * ((reviewPerson.length-1) - 0 + 1) + 0);
    const random = reviewPerson[randomIndex];
    setDisplay(random)
  }

  return (
  <div key={display.id}>
    <article>Employee Review</article>
      <img src={display.image} width="50px" height="50px"/>
      <p>{display.name}</p>
      <p>{display.job}</p>
      <article>{display.text}</article>
      <FaArrowLeft className='beer' onClick={() => previousReview(display.id)}/>
      &nbsp;
      <FaArrowRight className='beer' onClick={() => nextReview(display.id)}/>
      <br />
      <button className='btn' onClick={()=>randomReview()}>Random Person</button>
  </div>
  )
};
export default App;

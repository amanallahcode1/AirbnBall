import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newReview } from '../../store/reviews';

import './reviewPage.css';

function ReviewPage () {

  const dispatch = useDispatch();

  
  const [review, setReview] = useState("");
  const [writer, setWriter] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      writer,
      review,

    };
    await dispatch(createReview(newReview))
    setWriter("")
  };


  return (
   
      <form className="reviewSection" onSubmit={handleSubmit}>

        <input value={writer}onChange={e=> setWriter(e.target.value)}></input>
        <textarea
          className="textForReview"
          type="text"
          placeholder="Leave your thoughts on this court!"
          value={review}
          onChange={e => setWriter(e.target.value)} />

        <button type="submit">Submit</button>
      </form>

  );
};

export default ReviewPage
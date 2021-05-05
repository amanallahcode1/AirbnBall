import React, { useRef, useEffect, useCallback, useState } from 'react';
import {useDispatch} from 'react-redux'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { createReview } from '../../store/reviews';
import { useParams } from 'react-router';
import './Modal.css'
const ModalWrapper = styled.div `
    width:550px;
    height:400px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display:grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    margin-top: -250px;
    margin-left:900px;
`

const ModalImg = styled.img`
    width:100%;
    height:100%;
    border-radius: 10px 0 0 10px;
    background: #000;

`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const id = useParams()
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [author, setAuthor] = useState("")

  const resetFields = () => {
    setReview("")
    setAuthor('')
    return
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      author,
      review,
      spotId: id.id,
    };
    await dispatch(createReview(newReview))
    resetFields()
  };

  return (
    <>
      {showModal ? (
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <form onSubmit={handleSubmit} className="form-si" id="form-si">
                    <div className="reviewForm">
                        <h1 id="thought">Thoughts ?</h1>
                        <label>
                        Your Desired Name
                            <input
                            id="desiredName"
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            />
                        </label>

                        <label id="label2">
                            Review
                            <input
                            id='reviewBody'
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                            />
                        </label>
                        <a href={`/spots/${id.id}`}>
                            <div>
                                <button type="submit">Post</button>
                            </div>
                    </a>
                   </div>
                </form>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
      ) : null}
    </>
  );
};
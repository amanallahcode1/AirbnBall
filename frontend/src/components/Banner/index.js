import React from 'react';
import './banner.css';

function Banner() {
    return (
        <div className='banner'>
          <div id='splash-form'>
              <h2>Search for courts that are
                  available for you and your friends to ball in.
                  Put that work in!
              </h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" placeholder="Try Los Angeles..."/>
                    <label>LOCATION</label>
                </div>
               
            <a href="#">
                <button class='form-button'>
                    Submit
                </button>
            
            </a>
            </form>
          </div>
        </div>
    )
}

export default Banner;

import React from 'react';
import './banner.css';

function Banner() {
    return (
        <div className='banner'>
          <div id='splash-form'>
              <h2>Book a court. Let's ball.
              </h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" placeholder="Try 'Los Angeles'..."/>
                    <label>LOCATION</label>
                </div>
            </form>
          </div>
        </div>
    )
}

export default Banner;

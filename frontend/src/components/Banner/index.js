import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from 'react-redux';

import "react-datepicker/dist/react-datepicker.css";
import './banner.css';

function Banner() {
    const sessionUser = useSelector((state) => state.session.user);

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
    return (
        <div className='banner'>
          <div id='splash-form'>
              <h2>Let's play ball.
              </h2>
            
                <div className="user-box">
                    <input type="text" name="" required="" placeholder="Try 'Los Angeles'..."/>
                    <label>LOCATION</label>
                </div>
                <div className="date-box">
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                    <label>FIND DATES</label>
                </div>
                <div className="user-box">
                    <select className="search-players" placeholder="Players">
                        <option class="players-list" value="4" placeholder="Players">4</option>
                        <option class="players-list" value="6" placeholder="Players">6</option>
                        <option class="players-list" value="8" placeholder="Players">8</option>
                        <option class="players-list" value="10" placeholder="Players">10</option>
                    </select>
                    <label>PLAYERS</label>
                </div>
                <a href="/search">
                    <button className='submitLocButton'>Search</button>
                </a>
            
          </div>
        </div>
    )
}

export default Banner;

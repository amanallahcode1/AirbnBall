import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <div className="about">
            <section className="contact1">
                <div className="container1">
                     <div className="content1">
                        <h2 className="hContact" id="contactme">Contact Me</h2>
                        <p className="hContact">I am a software engineer who is passionate about problem-solving. 
                        I wanted to combine my knack for creating things from scratch
                        with my love for basketball. Contact me if you liked it, have any criticism,
                        or anything else and I will promptly get back to you!
                        </p>
                      </div>
                    <div className="contactInfo1">
                        <div className="box1">
                            <div className="icon">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                            <div className="text1">
                                <a href="https://www.linkedin.com/in/shahene-chaouachi-1964171a4/">
                                    <h3>Linkedin</h3>
                                </a>
                            </div>
                        </div>

                        <div className="box1">
                            <div className="icon">
                               <FontAwesomeIcon icon={faGithubSquare} />
                            </div>
                            <div className="text1">
                                <a href="https://github.com/amanallahcode1">
                                    <h3>Github</h3>
                                </a>
                            </div>
                        </div>

                        <div className="box1">
                            <div className="icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className="text1">
                                <a href="https://twitter.com/shahene6">
                                    <h3>Twitter</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <h1 id="createdBy">Created by Shahene Chaouachi.</h1>
            </section>
        </div>
    )
}

export default About;
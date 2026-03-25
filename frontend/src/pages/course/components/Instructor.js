import UdeAvatar from "components/avatar";
import React, { useState } from "react";
import { FaStar, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdRateReview, MdPeople, MdPlayCircleFilled } from "react-icons/md";
function Instructor() {
    const [show, setShow] = useState(false);
    return (
        <div className="instructor">
            <div className="instructor-container">
                <div className="instructor-content">
                    <div className="instructor-heading">
                        <h1>Instructor</h1>
                    </div>
                    <div className="instructor-info">
                        <div className="instructor-info__heading">
                            <h1>Colt Steele</h1>
                            <h3>Developer and Bootcamp Instructor</h3>
                        </div>
                        <div className="instructor-info__profile">
                            <UdeAvatar size="AvatarLg" AvatarSrc="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="instructor-img" />
                            <div className="instructor-info__profile-blocklist">
                                <ul>
                                    <li>
                                        <FaStar className="blocklist-icon" />
                                        <span>4.7 Instructor rating</span>
                                    </li>
                                    <li>
                                        <MdRateReview className="blocklist-icon" />
                                        <span>327,775 Reviews</span>
                                    </li>
                                    <li>
                                        <MdPeople className="blocklist-icon" />
                                        <span>1,015,347 Students</span>
                                    </li>
                                    <li>
                                        <MdPlayCircleFilled className="blocklist-icon" />
                                        <span>11 Courses</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="introduce">
                            <div className={`introduce-content ${show ? "open" : ""}`}>
                                <p>
                                    Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where
                                    <span> I've helped hundreds of people become web developers and change their lives.</span> My graduates work at companies like Google, Salesforce, and Square.
                                </p>
                                <p>
                                    Most recently, I led Galvanize's SF's 6 month immersive program as <span>Lead Instructor</span> and <span>Curriculum Director</span>. After graduating from my
                                    class, 94% of my students went on to receive full-time developer roles. I also worked at Udacity as a <span>Senior Course Developer</span> on the web development
                                    team where I got to reach thousands of students daily.
                                </p>
                                <p>
                                    I’ve since focused my time on bringing my classroom teaching experience to an online environment. In 2016 I launched my <span> Web Developer Bootcamp course</span>,
                                    which has since gone on to become one of the best selling and top rated courses on Udemy. I was also voted <span>Udemy’s Best New Instructor of 2016.</span>
                                </p>
                                <p>
                                    I've spent years figuring out the "formula" to teaching technical skills in a classroom environment, and I'm really excited to finally share my expertise with you.
                                    I can confidently say that my online courses are without a doubt the most comprehensive ones on the market.
                                </p>
                                <p>
                                    <span>Udemy’s Best New Instructor of 2016.</span>
                                </p>
                                {show ? null : <div className="introduce-overlay"></div>}
                            </div>
                            <div className="button-shows">
                                <button onClick={() => setShow(!show)}>
                                    {show ? <span>Show less</span> : <span>Show more</span>}
                                    {show ? <FaAngleUp /> : <FaAngleDown />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instructor;

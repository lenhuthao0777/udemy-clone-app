import React from "react";
import { FiCheck } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
function WillLearn() {
    const willLearn = [
        {
            id: 1,
            title: "Make REAL web applications using cutting-edge technologies",
        },
        {
            id: 2,
            title: "Create responsive, accessible, and beautiful layouts",
        },
        {
            id: 3,
            title: "Recognize and prevent common security exploits like SQL-Injection & XSS",
        },
        {
            id: 4,
            title: "Continue to learn and grow as a developer, long after the course ends",
        },
        {
            id: 5,
            title: "Create a blog application from scratch using Node, Express, and MongoDB.",
        },
        {
            id: 6,
            title: "Create a complicated yelp-like application from scratch",
        },
        {
            id: 7,
            title: "Deploy your applications and work with cloud databases",
        },
        {
            id: 8,
            title: "Create static HTML and CSS portfolio sites and landing pages",
        },
        {
            id: 9,
            title: "Think like a developer. Become an expert at Googling code questions!",
        },
        {
            id: 10,
            title: "Create complex HTML forms with validations",
        },
        {
            id: 11,
            title: "Implement full authentication from scratch!",
        },
        {
            id: 12,
            title: "Use CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma",
        },
        {
            id: 13,
            title: "Implement responsive navbars on websites",
        },
        {
            id: 14,
            title: "Use JavaScript variables, conditionals, loops, functions, arrays, and objects",
        },
        {
            id: 15,
            title: "Write Javascript functions, and understand scope and higher order functions",
        },
        {
            id: 16,
            title: "Master the weird parts of JavaScript",
        },
        {
            id: 18,
            title: "Create full-stack web applications from scratch",
        },
        {
            id: 19,
            title: "Manipulate the DOM with vanilla JS",
        },
        {
            id: 20,
            title: "Write JavaScript based browser games",
        },
        {
            id: 21,
            title: "Use Postman to monitor and test APIs",
        },
        {
            id: 22,
            title: "Use NodeJS to write server-side JavaScript",
        },
        {
            id: 23,
            title: "Write complex web apps with multiple models and data associations",
        },
        {
            id: 24,
            title: "Write a REAL application using everything in the course",
        },
        {
            id: 25,
            title: "Use Express and MongoDB to create full-stack JS applications",
        },
        {
            id: 26,
            title: "Use common JS data structures like Arrays and Objects",
        },
        {
            id: 27,
            title: "Master the command line interface",
        },
        {
            id: 28,
            title: "Use NPM to install all sorts of useful packages",
        },
        {
            id: 29,
            title: "Understand the ins and outs of HTTP requests",
        },
        {
            id: 30,
            title: "Create your own Node modules",
        },
        {
            id: 31,
            title: "Make a beautiful, responsive photographer's portfolio page",
        },
        {
            id: 32,
            title: "Create a beautiful, responsive landing page for a startup",
        },
        {
            id: 33,
            title: "Implement user authentication",
        },
        {
            id: 34,
            title: "Create a beautiful animated todo list application",
        },
        {
            id: 35,
            title: "Create single page applications with AJAX",
        },
    ];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="will-learn">
            <div className="bottom-container">
                <div className="will-learn__content">
                    <h1 className="will-learn__heading">What you'll learn</h1>
                    <ul className={`will-learn__list ${isOpen ? "open" : ""}`}>
                        {willLearn.map((item) => {
                            return (
                                <li className="will-learn__item" key={item.id}>
                                    <span>
                                        <FiCheck className="tick-icon" />
                                    </span>
                                    <p>{item.title}</p>
                                </li>
                            );
                        })}
                        {isOpen == false ? <div className="will-learn__overlay"></div> : null}
                    </ul>
                    <div className="show-more" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen == false ? <p>Show more</p> : <p>Show less</p>}
                        <span>{isOpen == false ? <FaAngleDown /> : <FaAngleUp />}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WillLearn;

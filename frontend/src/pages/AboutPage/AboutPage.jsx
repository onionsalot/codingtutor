import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./AboutPage.css"

export default function AboutPage() {
  return (
      <>
      <h1>Coding Tutor</h1>
    <div className="about-holder">
      <h3> About </h3>
      <Link to="/" className="btn btn-primary button-left">Back</Link><br/>
      <dl>
        <dt>What is this?</dt>
            <dd>A GA SEI collaboration project! <br/><br/>
            Are you learning to code and want some help from someone more experienced? Or maybe you are an established programmer wanting to make some money tutoring new learners, either way, Coding Tutor is the choice for you! With the Coding Tutor app you can create an account as a student or tutor, students are able to view tutor profiles and schedule meetings with tutors. Tutors are able to list their skills, such as JavaScript, React, Django, etc., and create time slots for students to schedule meetings.</dd>
        <dt>Getting Started:</dt>
            <dd>Sign up or login to reach the home screen, which will display 25 tutors(API limitations) sorted from closest to furthest away from you based on your zipcode! If you are uncomfortable providing your zipcode, you may log onto the demo account. Details on login screen.</dd>
        <dt>Tech Used:</dt>
            <dd>
                Python, Django, PostgreSQL, Javascript, React, Css
                <ul>
                    <li>APIs used: Google Geolocation, Google Distance Matrix, Cloudinary </li>
                    <li>Notable libraries: Django-js-choices, BeautifulSoup, React-Calendar, React-Select</li>
                </ul>
            </dd>
        <dt>Credits:</dt>
            <dd>
                <table className="about-table">
                    <tr>
                        <td>
                            <h5>Trong Nguyen</h5>
                            Github: <a href="https://github.com/onionsalot" target="new">Link</a><br/>
                            LinkedIn: <a href="https://www.linkedin.com/in/trong-nguyen1008/" target="new">Link</a>
                        </td>
                        <td>
                            <h5>Denise Onukwue</h5>
                            Github: <a href="https://github.com/denisekathy" target="new">Link</a><br/>
                            LinkedIn: <a href="https://www.linkedin.com/in/deniseonukwue/" target="new">Link</a>
                        </td>
                        <td>
                            <h5>Alex Mrak</h5>
                            Github: <a href="https://github.com/alexandermrak" target="new">Link</a><br/>
                            LinkedIn: <a href="https://www.linkedin.com/in/alexandermrak/" target="new">Link</a>
                        </td>
                        
                    </tr>
                </table>

            </dd>
      </dl>
    </div>
    </>
  );
}

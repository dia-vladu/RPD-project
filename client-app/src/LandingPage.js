import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (

        <div className="landingPage">
            <div>
                <div id="formLabels">
                    <label id="label1">BugTracking is a  defect-tracking application, or bug-tracking application. APP allows teams of developers to keep track of outstanding bugs, problems, issues, enhancement and other change requests in their products effectively. </label>
                    <label id="label2">BugTracking is a free tool to use whenever you have a problem that needs to be resolve. Our professional team will resolve your problem in short-time. Also, the APP provides a long list of features: </label>
                    <ul id="listFeature">
                        <li>the possibility of submitting your bug problem</li>
                        <li>the possibility to submit even the severe bug-problems</li>
                        <li>a talented team that resolve your problem in short-time </li>
                        <li>provides a friendly user-interface</li>
                    </ul>
                </div>

            </div>
        </div>




    );
}

export default LandingPage;
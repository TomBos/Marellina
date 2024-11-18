import '../styles/public/landingPage.scss';
// === END OF STYLES ===

import React from 'react';
// === END OF IMPORTS ===

const LandingPage = ({ stringObject }) => {

    return (
        <>

            <div className='hero mobile'>
                <svg viewBox="0 0 500 150">
                  <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                  <text width="500">
                    <textPath alignmentBaseline='top' xlinkHref="#curve">
                        {stringObject.Title}
                    </textPath>
                  </text>
                </svg>
                <img className='landing-page-img' src={stringObject.Image} alt="placeholder" />
            </div>

        
            
            <p className="about">{stringObject.About}</p>



            
            <h1>{stringObject.CallToActionReasoningTitle}</h1>

            

            <ul>
                {stringObject.ReasonsToBuy && Object.keys(stringObject.ReasonsToBuy).map((key, index) => {
                    return  (
                    <li key={index}>
                        {stringObject.ReasonsToBuy[key]}
                    </li>
                    );
                })}
            </ul>
        </>
    );
};

export default LandingPage;
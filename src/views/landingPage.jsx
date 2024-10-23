import React from 'react';

const LandingPage = ({ stringObject }) => {

    console.log(stringObject);

    return (
        <>
            <h1>{stringObject.Title}</h1>

            <img src={stringObject.Image} alt="placeholder" />
            <p>{stringObject.About}</p>
            <h1>{stringObject.CallToActionTitle}</h1>

            <ul>
                {stringObject.Products && Object.keys(stringObject.Products).map((key, index) => {
                    return  (
                    <li key={index}>
                        {stringObject.Products[key]}
                    </li>
                    );
                })}
            </ul>
            
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
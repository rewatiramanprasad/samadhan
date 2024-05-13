import React from 'react';
import './Features.css';
import Feature from './Feature';

function Features() {
    return (
        <div className="features">
            <div className="features__heading">
                <h1>Need something done?</h1>
            </div>
            <div className="features__single">
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/post-a-job-redesign.svg"
                    title="Post a problem"
                    content="It's easy. Simply post a problem  you need completed and receive competitive bids from Smadhan service Provider within minutes."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/choose-freelancers-redesign.svg"
                    title="wait for bid"
                      content="check your problem , wait for your best bid until you get best service provider as well as  minimun service fee"
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/pay-safely-redesign.svg"
                    title="choose your service provider"
                    content="With optimise service fee and thousands of reviewed professionals to choose from, Samadhan.com is the simplest and safest way to get solution at your door through online."
                />
            </div>

        </div>
    )
}

export default Features

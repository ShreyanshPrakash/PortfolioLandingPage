import React from 'react';

import {
    Avatar,
    Title,
    Description,
    Skills,
} from 'components';

export function Landing(){

    return (
        <div className="landing-page-wrapper">
            <Avatar />
            <Title />
            <Description />
            <Skills />
        </div>
    )
}
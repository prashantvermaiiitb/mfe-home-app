import React from 'react';

import { Content as IN } from "./india";
import { UK } from "./non-india/uk";
import { US } from "./non-india/us";
import { COUNTRIES } from "./utils/constants";
import { getGeoCountry } from "./utils/getGeoLocation";

const HomePageContent = () => {
    const country = getGeoCountry();
    switch (country) {
        case COUNTRIES.IN: return <IN />;
        case COUNTRIES.US: return <US />
        case COUNTRIES.UK: return <UK />
        default:
            return <IN />
    }
}

export default HomePageContent; 
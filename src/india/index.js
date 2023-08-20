import React from 'react';

import { CITIES, DEFAULT_CITY } from "../utils/constants";
import { getGeoLocation } from "../utils/getGeoLocation";
import { Bengaluru } from "./Bengaluru";
import { Chennai } from "./Chennai";
import { Kolkata } from "./Kolkata";
import { Mumbai } from "./Mumbai";
import { NewDelhi } from "india/newdelhi";
import { Patna } from "./Patna";

export const Content = (props) => {

    const geolocation = getGeoLocation() || DEFAULT_CITY;
    switch (geolocation) {
        case CITIES.BENGALURU: return <Bengaluru />
        case CITIES.PATNA: return <Patna />
        case CITIES.NEWDELHI: return <NewDelhi />
        case CITIES.KOLKATA: return <Kolkata />
        case CITIES.MUMBAI: return <Mumbai />
        case CITIES.CHENNAI: return <Chennai />
        default:
            return <NewDelhi />
    }
}
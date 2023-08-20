import { COUNTRIES, DEFAULT_COUNTRY } from "../utils/constants";
import { getGeoCountry } from "../utils/getGeoLocation";
import { Row } from "./row";
import { Uk } from "./uk";
import { Us } from "./us";

const Content = (props) => {

    const geolocation = getGeoCountry() || DEFAULT_COUNTRY;
    switch (geolocation) {
        case COUNTRIES.US: return <Us />
        case COUNTRIES.UK: return <Uk />
        case COUNTRIES.ROW: return <Row />
        default:
            return <Row />
    }
}

export default Content;
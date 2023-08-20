import { GEO_COUNTRY_KEY, GEO_LOCATION_KEY } from "./constants";

/**
 * Reading keyName from the localStorage
 */
const readLocalStorage = (keyName) => {
    try {
        return localStorage[keyName];
    } catch (e) {
        console.log(`Error happened while reading ${localStorage.keyName}`);
    }
    return null;
}
/**
 * reading cookie from the cookies 
 */
const readCookie = (cookieName) => {
    document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)')?.pop() || ''
}

const readParams = (paramName) => {
    if (location.search === '')
        return null;
    const queryParams = location.search.replace('?', '').split('&');
    if (Array.isArray(queryParams) && queryParams.length) {
        const queryParamJson = queryParams.map(queryParam => {
            const [key, value] = queryParam.split('=');
            return { [key]: value }
        }).reduce((accumlator, current) => {
            return { ...accumlator, ...current };
        }, {});
        return queryParamJson[paramName];
    }
    return null;
}

/**
 * Getting geolocation for the page
 * @returns 
 */
export const getGeoLocation = () => {
    return readCookie(GEO_LOCATION_KEY) || readLocalStorage(GEO_LOCATION_KEY) || readParams(GEO_LOCATION_KEY);
}

/**
 * Getting country for the page
 * @returns 
 */
export const getGeoCountry = () => {
    return readCookie(GEO_COUNTRY_KEY) || readLocalStorage(GEO_COUNTRY_KEY) || readParams(GEO_COUNTRY_KEY);
}
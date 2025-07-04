import { data } from '../data'

/**
 * Gets whether user is logged in the system.
 * 
 * @returns {boolean} The state os user log (true if logged on, false otherWise).
 */
export const isUserLoggedIn = () => !!data.getToken()
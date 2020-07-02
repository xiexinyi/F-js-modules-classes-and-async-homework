import {ADDRESS, PORT, PATH, REGION} from './constant.js'
import getURL from './utils.js'

export const url = getURL(ADDRESS, PORT, PATH);
export {REGION as region};
// In case if you are curious how does it generated - check out {@link scripts/generate-windows-1251-data.js} file
import { MAPPING as MAPPING_AS_ARRAY, NO_CHANGE } from './windows-1251.json'

const MAPPING = new Map(MAPPING_AS_ARRAY)

/**
 * Encode string to Windows-1251 encoding
 * @param {String} input - string to encode
 * @return {String} - encoded string
 */
const encodeToWindows1251 = (input) =>
    [...input].reduce((acc, char, i) => {
        const charCode = input.charCodeAt(i)
        if (NO_CHANGE.includes(charCode)) {
            return `${acc}${char}`
        }

        return MAPPING.has(charCode)
            ? `${acc}${MAPPING.get(charCode)}`
            : `${acc}%26%23${charCode}%3B`
    }, '')

export default encodeToWindows1251

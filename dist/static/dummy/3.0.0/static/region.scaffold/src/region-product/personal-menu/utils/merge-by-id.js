/**
 * Merge objects with equal ids
 *
 * @param {Array} array - array of objects with unique id
 * @param {Object} property - object with id to be merged
 * @param {Number} id - uniq id to search matching objects
 * @return {Array}
 */

export const mergeById = (array, property, id) =>
    array
        .map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    ...property
                }
            }
            return item
        })

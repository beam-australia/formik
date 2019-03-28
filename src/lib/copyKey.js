/**
 * Copies a key to a value in nested structures
 * @param {Array} data
 * @param {string} fromKey key to copy from
 * @param {string} toKey new key to copy into
 */
export default function copyKey(data, fromKey, toKey) {
  return data.map(item => {
    for (const itemKey in item) {
      if (Array.isArray(item[itemKey])) {
        item[itemKey] = copyKey(item[itemKey], fromKey, toKey)
      } else {
        item[toKey] = item[fromKey]
      }
    }
    return { ...item }
  })
}

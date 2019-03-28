import rename from 'deep-rename-keys'

/**
 * Maps keys into a treelike structure
 * @param {Array} data
 * @param {Object} keyMap maps keyMap.key to keyMap.value
 */
export default function mapKeys(data, keyMap) {
  const mapped = rename(data, key => {
    for (const mapKey in keyMap) {
      if (key === mapKey) {
        return keyMap[mapKey]
      }
    }
    return key
  })
  return [...mapped]
}

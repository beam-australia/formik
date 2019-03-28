import mapKeys from './mapKeys'
import copyKey from './copyKey'

/**
 * @note THIS IS A TEMPORARY FUNCTION
 * @note extend this onece we have our taxonomy structure.
 */
export default function mapTree(data) {
  const mapped = mapKeys(data, {
    name: 'title',
    slug: 'value'
  })
  const parentsDisabled = mapped.map(item => {
    // item.selectable = false
    // item.disabled = true
    return item
  })
  return copyKey(parentsDisabled, 'value', 'key')
}

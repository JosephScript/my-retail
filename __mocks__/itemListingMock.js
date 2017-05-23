import item from '../data/item-data.json'
import processItem from '../src/utils/processItem.js'

module.exports = {
  ...processItem(item)
}

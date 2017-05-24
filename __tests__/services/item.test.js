import fetchMock from 'fetch-mock'
import itemdata from '../../__mocks__/item-dataMock.js'
import itemService from '../../src/services/item.js'

describe('Carousel', () => {
  it('successfully makes ajax call and contains the item data', () => {
    // mocks a single post request to example.com/api/0
    fetchMock.get('*', itemdata)
    itemService.getItem(0).then(item => {
      expect(item).toEqual(itemdata)
    })

    // unmock
    fetchMock.restore()
  })
})
it('handles an error when there is a bad response', () => {
  // mocks a single post request to example.com/api/0
  fetchMock.get('*', 500)
  itemService.getItem(0).catch(item => {
    expect(item).not.toBeNull()
    expect(item).toBeDefined()
  })

  // unmock
  fetchMock.restore()
})

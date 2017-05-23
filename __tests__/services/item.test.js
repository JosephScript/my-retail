import fetchMock from 'fetch-mock'
import itemdata from '../../__mocks__/item-dataMock.js'
import itemService from '../../src/services/item.js'

describe('Carousel', () => {
  it('successfully makes ajax call and renders without crashing', () => {
    // mocks a single post request to example.com/api/0
    fetchMock.get('*', itemdata)
    itemService.getItem(0).then(item => {
      expect(item).not.toBeNull()
      expect(item).toBeDefined()
    })

    // unmock
    fetchMock.restore()
  })
})

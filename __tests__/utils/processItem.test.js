import processItem from '../../src/utils/processItem.js'

describe('Ratings', () => {
  it('it formats titles correctly', () => {
    let item = {
      CatalogEntryView: [{
        title: 'Mock title'
      }]
    }

    expect(processItem(item).title).toEqual('Mock title')
  })
})

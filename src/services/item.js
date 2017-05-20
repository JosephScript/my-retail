export default class {
  constructor () {
    // TODO: Cache item details

    this.getItem = () => {
      return fetch('/api/itemId', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return response.text().then(err => {
            let error = new Error(err)
            error.response = response
            throw error
          })
        }
      }).catch((ex) => {
        // TODO: Handle error gracefully
        console.log(ex)
      })
    }
  }
}

class EasyHTTP {

  checkErr(res) {
    if (res.ok != true) {throw new Error(res.error)}
    else return res;
  }

  get(url) {
    return new Promise((resolve, reject) => {
          fetch(url)
          .then(res => this.checkErr(res))
          .then(res => res.json())
          .then(jsonText => resolve(jsonText))
          .catch((err => reject(err)));
      }
    )
  }

  post(url, data) {
    return new Promise ((resolve, reject) =>
      fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => this.checkErr(res))
      .then(res => resolve(`Data posted! Here's the response: ${res}`))
      .catch(err => reject(err))
    )
  }
  
  put(url, data) {
    return new Promise((resolve, reject) =>
      fetch(url, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => this.checkErr(res))
      .then(res => resolve(`Data put! Here's the response: ${res}`))
      .catch(err => reject(err))
    )
  }

  delete(url) {
    return new Promise((resolve, reject) =>
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => this.checkErr(res))
      .then(() => resolve(`Post deleted!`))
      .catch(err => reject(err))
    )
  }
}

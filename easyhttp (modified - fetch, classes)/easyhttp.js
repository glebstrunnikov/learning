class EasyHTTP {

  checkErr(res) {
    if (res.ok != true) {throw new Error(res.error)}
    else return res;
  }

  async get(url) {
    const response = await fetch(url);
    this.checkErr(response);
    const responseText = await response.text();
    return responseText
  }

  async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      });
      this.checkErr(response);
      const responseText = await `Post published! Response: ${response.text()}`;
      return responseText
  }
  
  async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      this.checkErr(response);
      const responseText = await `Post updated! Response: ${response.text()}`;
      return responseText
  }

  async delete(url) {
    const response = await fetch(url, {method: 'DELETE'});
    this.checkErr(response);
    return 'Post deleted!'
  }

//   delete(url) {
//     return new Promise((resolve, reject) =>
//       fetch(url, {
//         method: 'DELETE'
//       })
//       .then(res => this.checkErr(res))
//       .then(() => resolve(`Post deleted!`))
//       .catch(err => reject(err))
//     )
//   }
}



//   put(url, data) {
//     return new Promise((resolve, reject) =>
//       fetch(url, {
//         method: 'PUT',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(data)
//       })
//       .then(res => this.checkErr(res))
//       .then(res => resolve(`Data put! Here's the response: ${res}`))
//       .catch(err => reject(err))
//     )
//   }

//   delete(url) {
//     return new Promise((resolve, reject) =>
//       fetch(url, {
//         method: 'DELETE'
//       })
//       .then(res => this.checkErr(res))
//       .then(() => resolve(`Post deleted!`))
//       .catch(err => reject(err))
//     )
//   }

      // .then(res => res.json)
      // .then(jsonText => console.log(jsonText))
      // .catch(err => console.log(err))

    // return new Promise((resolve, reject) => {
    //       fetch(url)
    //       .then(res => this.checkErr(res))
    //       .then(res => res.json())
    //       .then(jsonText => resolve(jsonText))
    //       .catch((err => reject(err)));
    //   }
    // )
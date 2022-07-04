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
}
const http = new EasyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// // // Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(res => console.log(res))
  .catch(err => console.log(err))

// // Update Post
http.put('https://jsonplaceholder.typicode.com/posts/5', data)
  .then(res => console.log(res))
  .catch(err => console.log(err))

// // // // Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res))
  .catch(err => console.log(err))

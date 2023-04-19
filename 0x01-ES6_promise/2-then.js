export default function handleResponseFromAPI(promise) {
  return new Promise((myresolve, myreject) => {
    if (promise) {
      myresolve({ status: 200, body: 'success' });
    } else {
      myreject(new Error());
    }
    console.log('Got a response from the API');
  });
}

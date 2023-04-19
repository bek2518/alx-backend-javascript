export default function getFullResponseFromAPI(success) {
  return new Promise((myresolve, myreject) => {
    if (success === true) {
      myresolve({ status: 200, body: 'success' });
    } else if (success === false) {
      myreject(new Error('The fake API is not working currently'));
    }
  });
}

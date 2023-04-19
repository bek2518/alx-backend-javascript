export default function uploadPhoto(filename) {
  return new Promise((myreject) => {
    myreject(new Error(`${filename} cannot be processed`));
  });
}

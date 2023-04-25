export const weakMap = new WeakMap();

let counter = 1;

export function queryAPI(endPointArgument) {
  if (weakMap.get(endPointArgument) >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endPointArgument, counter);
  counter += 1;
}

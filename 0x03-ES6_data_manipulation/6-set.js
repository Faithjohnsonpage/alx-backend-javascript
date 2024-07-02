export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array as input');
  }
  return new Set(array);
}

export default function canIterate(obj) {
  if (Symbol.iterator in Object(obj)) {
    return true;
  }
  return false;
}

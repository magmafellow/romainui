export function checkPath(paths) {
  if (!paths.includes(window.location.pathname)) {
    return false
  }
  return true
}

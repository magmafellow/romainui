/**
 * Throttle/debounce a function. Great for rate-limiting resize/scroll handlers.
 *
 * @param {number} delay Delay in ms (>= 0).
 * @param {Function} callback Invoked with the throttled fn's `this` and args.
 * @param {object} [options]
 * @param {boolean} [options.noTrailing=false] Skip the final trailing call.
 * @param {boolean} [options.noLeading=false] Skip the immediate leading call.
 * @param {boolean} [options.debounceMode] true = debounce at start, false = at end.
 * @returns {Function} Throttled function with a `.cancel()` method.
 */
function throttle(delay, callback, options) {
  const { noTrailing = false, noLeading = false, debounceMode } = options || {}

  let timeoutID
  let cancelled = false
  let lastExec = 0

  function clearTimeoutID() {
    if (timeoutID) clearTimeout(timeoutID)
  }

  function cancel(opts) {
    clearTimeoutID()
    cancelled = !(opts && opts.upcomingOnly)
  }

  function wrapper(...args) {
    const self = this
    const elapsed = Date.now() - lastExec

    if (cancelled) return

    function exec() {
      lastExec = Date.now()
      callback.apply(self, args)
    }

    function clear() {
      timeoutID = undefined
    }

    // Leading edge for debounce-at-start mode.
    if (!noLeading && debounceMode && !timeoutID) exec()

    clearTimeoutID()

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        // Throttle w/ noLeading: defer execution by `delay`.
        lastExec = Date.now()
        if (!noTrailing) timeoutID = setTimeout(exec, delay)
      } else {
        exec()
      }
    } else if (noTrailing !== true) {
      // Trailing edge: schedule clear (debounce) or exec (throttle).
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay,
      )
    }
  }

  wrapper.cancel = cancel
  return wrapper
}


window.__throttle = throttle

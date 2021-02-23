const debounce = (() => {
  let timeout = null

  return (fn, time) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn()
    }, [time])
  }
})()

export { debounce }

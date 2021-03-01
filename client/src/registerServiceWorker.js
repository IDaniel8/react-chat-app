function register() {
  if (
    process.env.NODE_ENV === 'production' &&
    'serviceWorker' in navigator
  ) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/sw.js`
      navigator.serviceWorker.register(swUrl)
    })
  } else {
    // eslint-disable-next-line no-console
    console.log('Service Worker is not supported by browser.')
  }
}

export const registerServiceWorker = {
  register,
}

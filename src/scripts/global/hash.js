setTimeout(() => {
  if (!window.location.hash) {
    return
  }

  const el = document.querySelector(window.location.hash)

  if (el == null) {
    return
  }

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}, 1000)

function handleScrollDown() {
  window.scrollBy({
    top: window.innerHeight,
  })
}

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(`
  #profile, #intro-subtitle, #intro-title, #intro-text, .tags .tag, .scroll-down, #projects-title, #projects-subtitle, .projects-grid .project-wrapper, .contact span, .contact h2, .contact p, .contact ul a, footer
  `, { interval: 150 })

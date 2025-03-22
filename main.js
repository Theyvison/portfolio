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
  #profile, #intro-subtitle, #intro-title, #intro-text, .tags, .scroll-down, #projects-title, #projects-subtitle, .contact span, .contact h2, .contact p
  `, { interval: 100 })

scrollReveal.reveal(`
    .tag, .project, .contact ul a, footer
    
    `, { interval: 100 })
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  
    if (!audio) return;
  
    audio.currentTime = 0
    audio.play()
  
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
  
    key.addEventListener('transitionend', (e) => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing')
    })
    
  })

  const drumBtn = document.querySelectorAll('.key')
  drumBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.currentTarget.getAttribute('data-key')}"]`)
    if (!audio) return;
  
  
    audio.currentTime = 0
    audio.play()

    e.currentTarget.classList.add('playing')
  
    e.currentTarget.addEventListener('transitionend', (e) => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing')
    })
  }))
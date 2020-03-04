// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'If you don\'t know why you are here, <br>Then, probably, you shouldn\'t be here.',
  'Test 2'
]

const el = document.querySelector('.quote-text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 6000)
  })
  counter = (counter + 1) % phrases.length
}

next()
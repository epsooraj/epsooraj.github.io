// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'If you don\'t know why you are here,<br>Then, probably, you shouldn\'t be here.',
  'Wenn Sie nicht wissen,<br>warum Sie hier sind, sollten Sie wahrscheinlich nicht hier sein.',
  'Si vous ne savez pas pourquoi vous êtes ici,<br>alors, vous ne devriez probablement pas être ici.',
  'Si no sabes por qué estás aquí,<br>entonces, probablemente, no deberías estar aquí.',
  '如果您不知道为什么在这里，<br>那么，也许您不应该在这里。'
]

const el = document.querySelector('.quote-text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 8000)
  })
  counter = (counter + 1) % phrases.length
}

next()
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
   <h1>Bienvenidos a Vite</h1>
   <p>Se pueden meter cosas con DOM</p>
  </div>
`

setupCounter(document.querySelector('#counter'))

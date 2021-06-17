import App from './App.svelte'

const target = document.querySelector('#svelte-micro-frontend')

if (target) {
  // eslint-disable-next-line no-new
  new App({ target })
}

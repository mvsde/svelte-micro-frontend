import App from './App.svelte'

const target = document.querySelector('#app')

if (target) {
  // eslint-disable-next-line no-new
  new App({ target })
}

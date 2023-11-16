const dom = document.querySelector('a div.btn')

console.log(dom);
const state = {
  clicked:false
}
dom.addEventListener('click', () => {
  console.log('dom clicked');
  dom.textContent = 'dom clicked'
  // dom.classList.add('btn-clicked')
  if (state.clicked) {
dom.classList.remove('btn-clicked')
state.clicked = false
  } else {
    dom.classList.add('btn-clicked')
    state.clicked = true
  }
})
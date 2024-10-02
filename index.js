const openButton = document.querySelector('#open-button')
// const getButton = document.querySelector('#get-button')
const modal = document.querySelector('#modal')

let isModalVisible = false

openButton.onclick = () => {
  if (isModalVisible) {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'flex'
  }

  isModalVisible = !isModalVisible
}
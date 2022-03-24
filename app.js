const preview = document.createElement('div')
preview.id = 'preview'
document.body.appendChild(preview)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    preview.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild)
    }
    preview.appendChild(img)
  })
})
preview.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  preview.classList.remove('active')
})
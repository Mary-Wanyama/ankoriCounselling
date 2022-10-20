const form = document.querySelector('form')


form.addEventListener('submit', function (event) {
    event.preventDefault()
})


fetch('http://localhost:3000/contacts', {
    method : 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
})
.then()
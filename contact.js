const form = document.querySelector('form')

const url = 'http://localhost:3000/contacts'

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('hello')

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    console.log(data)

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))

    event.reset()

})

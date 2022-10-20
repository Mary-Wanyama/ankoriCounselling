

    fetch('http://localhost:3000/review')
    .then(res=>res.json())
    .then(json=>
        {
        json.map(el=> {
            console.log(el)
            const li = document.createElement('h4')
            li.textContent = el.name
            const p = document.createElement('p')
            p.textContent = el.message
            const feedback = document.getElementById('feedbacks')
            feedback.appendChild(li)
            feedback.appendChild(p)
        });

    }
    )
    .catch(error=>console.log(error))

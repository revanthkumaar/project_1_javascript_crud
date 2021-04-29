const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    //what to do after the click
    //fetch(endpoint,options)
    fetch('/tasks',{
        method:'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name:'kumar',
            task:'workshop'
        })
    })
});

const deleteButton = document.querySelector('#delete-button')
deleteButton.addEventListener('click', _ => {
    fetch('/tasks',{
        method:'delete',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name:'Revanth'
        })
    })
    .then(response => {
        if(response.ok) return response.json
    })
    .then(data => {
        window.location.reload()
    })
    .catch(err => {console.error(err)})
})
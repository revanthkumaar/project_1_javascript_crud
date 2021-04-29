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
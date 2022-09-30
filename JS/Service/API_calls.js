const url = 'http://localhost:8080'

export async function getAllActivities() {
    return await fetch(url + '/activities')
        .then(response => response.json())
}

export async function getActivityById(id) {
    return await fetch (url + '/activity/' + id )
        .then(response => response.json())
}

export async function deleteActivityById(id){
    return await fetch(url + '/activity/' + id,{
        method:"DELETE"
    })
        .then(response => {
            if(response.status==200){
                return  "succesfully deleted item"
            }
            return response.status
        })
        .catch(err => console.log(err))
}

export async function update(id){

}

export async function createActivity() {

}

/* and so on ... */
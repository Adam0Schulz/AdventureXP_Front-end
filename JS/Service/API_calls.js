const url = 'http://localhost:8080'

export async function getAll(resource) {
    return  fetch(url + '/'+ resource)
        .then(response => response.json())
}

export async function getById(id, resource) {
    return  fetch (url + '/'+ resource+'/' + id )
        .then(response => response.json())
}

export async function deleteById(id, resource) {
    return  fetch(url + '/'+ resource+'/' + id,{
        method:"DELETE"
    })
        .then(response => {
            if(response.status===200){
                return  "successfully deleted item"
            }
            return response.status
        })
        .catch(err => console.log(err))
}

export async function update(id,body,resource){
    return  fetch(url + '/'+ resource+'/' + id,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if(response.status===200){
                return  "successfully updated item"
            }
            return response.status
        })
        .catch(err => console.log(err))

}

export async function create(body,resource){
    return fetch(url + '/'+ resource+'/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body


        )
    })
        .then(response => {
            if(response.status===200){
                return  "successfully created item"
            }
            return response.status
        })
        .catch(err => console.log(err))
}
export async function search(keyword,resource){
    return fetch(url + '/'+ resource+'/search/' + keyword)
        .then(response => response.json())
}







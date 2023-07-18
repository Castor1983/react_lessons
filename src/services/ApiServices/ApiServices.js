export const NewUserService =  {
    createNewUser: (newUser) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}
export const NewComment = {
    createNewComment: (newComment) =>{
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}
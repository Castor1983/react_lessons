const baseURL = 'https://jsonplaceholder.typicode.com'
const posts = '/posts'
const urls = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    posts: {
        base: posts,
        byId: (postId) => `${posts}/${postId}`
    }
}

export {
    baseURL,
    urls
}
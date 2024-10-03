const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    return data;
};

window.onload = async () => {
    const data = await fetchData();
    const root = document.getElementById('root');
    root.append(...data.posts.map((item) => post(item.title, item.body)));

}

function post(title, body){
    const postitle = document.createElement('h1');
    const postbody = document.createElement('p');
    postitle.innerText = title;
    postbody.innerText = body;
    const post = document.createElement('div');
    post.append(postitle, postbody);
    return post;
}
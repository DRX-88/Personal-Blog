const submitBtn = document.getElementById('submit-btn');
const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const descriptionEl = document.getElementById('description');

submitBtn.addEventListener('submit', function (event) {
    event.preventDefault();

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const username = usernameEl.value;
    const title = titleEl.value;
    const description = descriptionEl.value;

    if (username.trim() === '' || title.trim() === '' || description.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    const newBlogPost = {
        username: username,
        title: title,
        description: description
    };

    blogPosts.push(newBlogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    location.href = 'blog.html';

    console.log(newBlogPost);

});

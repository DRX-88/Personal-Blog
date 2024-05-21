const blogPosts = document.getElementById('blog-posts');

function getBlogPosts() {

    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.forEach(function (post) {
        const postEl = document.createElement('div');
        postEl.classList.add('card', 'mb-3');

        postEl.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Author: ${post.username}</h6>
                <p class="card-text">${post.description}</p>
            </div>
        `;

        blogPosts.appendChild(postEl);
    });
}

getBlogPosts();

const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', function () {
    location.href = 'index.html';
});
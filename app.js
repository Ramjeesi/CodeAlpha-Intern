// Handle posting functionality
document.getElementById('post-button').addEventListener('click', function () {
    const postContent = document.getElementById('post-content').value.trim();
    if (postContent) {
        const postsContainer = document.querySelector('.posts');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <p><strong>You:</strong> ${postContent}</p>
            <div class="post-actions">
                <button class="like-button">Like</button>
                <button class="comment-button">Comment</button>
            </div>`;
        postsContainer.prepend(newPost); // Add new post at the top
        document.getElementById('post-content').value = ''; // Clear input field
    } else {
        alert('Please enter some content for your post.');
    }
});

// Handle like button toggle
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('like-button')) {
        const button = e.target;
        button.textContent = button.textContent === 'Like' ? 'Liked' : 'Like';
    }
});

// Handle comment button click (placeholder functionality)
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('comment-button')) {
        alert('Comment functionality is under construction.');
    }
});

// Handle privacy settings update
document.getElementById('settings-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedPrivacy = document.getElementById('privacy').value;
    alert(`Privacy setting updated to: ${selectedPrivacy}`);
});

// Simulate profile edit button
document.getElementById('edit-profile').addEventListener('click', function () {
    alert('Edit profile functionality will be implemented soon.');
});

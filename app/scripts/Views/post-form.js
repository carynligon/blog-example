import $ from 'jquery';
import user from '../Models/username';

let $newPost = $(`
  <div class="post-form">
    <h2>Write a new post</h2>
    <!-- names match data keys -->
    <form>
      <input type="text" name="title" class="new-post-title" placeholder="Title" />
      <textarea name="body" placeholder="blog post here"></textarea>
      <input type="submit" name="submit" value="submit">
    </form>
  </div>
  `);

$newPost.find('input[type="submit"]').on('click', function (evt) {
  evt.preventDefault();
  const date = {
    author: user.username,
    title: $('.new-post-title').val(),
    body: $('textarea').val(),
    timestamp: new Date()
  };

  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/blogPosts',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (response) {
      console.log(response);
    }
  });
});

export default $newPost;

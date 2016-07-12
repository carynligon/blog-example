import $ from 'jquery';

let $post = $(`
  <div class="post">
    <article class="post-content">
      <h2>Post Title</h2>
      <div class="post-meta-data">
        <span class="article-author">Author name</span>
        <time class="article-timestamp">time of post</time>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </article>
  </div>
  `);

export default $post;

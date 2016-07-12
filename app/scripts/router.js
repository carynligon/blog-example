import $ from 'jquery';
import $newPost from './views/post-form';
import $login from './views/login';
import $post from './views/post';
import $nav from './views/nav';
import $postList from './views/post-list';

function router() {
  var hash = location.hash;
  if (hash === '#login') {
    $('.container').empty();
    $('.container').append($login);
  } else if (hash === '#posts') {
    $('.container').empty();
    $('.container').append($nav).append($postList);
  } else if (hash === '#posts/new') {
    $('.container').empty();
    $('.container').append($nav).append($newPost);
  } else if (hash === '#posts/:id') {
    $('.container').empty().append($nav).append($post);
  }
}

export default router;

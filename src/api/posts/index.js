import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router(); // /api/posts

posts.get('/', postsCtrl.list); 
posts.post('/', postsCtrl.write);

const post = new Router(); // /api/posts/:id

post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
post.patch('/', postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;

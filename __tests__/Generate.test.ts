import { Generate } from '../src/index'

const data = {
    id: 1,
    name: 'test',
    description: 'long text',
    user_id: 1,
    posts: [{
      id: 1,
      user_id: 1,
      date: 65465657,
      title: 'title',
      text: 'long text'
    }],
    comments: [{
      id: 1,
      comment: 'hey ya',
      post_id: 1,
    }]
};

const results = "SELECT us.id,us.name,us.description,us.user_id,post,comment FROM users us JOIN posts po ON us.id = po.id JOIN comments co ON us.id = co.id  WHERE us.id=2";

test('Everybody said', () => {
    expect(Generate(data, 'users', 'http://demo.com?id=2')).toBe(results);
});
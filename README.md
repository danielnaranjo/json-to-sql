## Usage

Mock data
 ```
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
 ```


```
import { Generate } from '@danielnaranjo/json-to-sql';
const query = Generate(data, 'users', 'http://demo.com?id=2');
console.log(query);
```
 
 ## Test
 ```
 yarn test # or npm run test
 ```
 
Based on [Daniel Naranjo](https://twitter.com/naranjodaniel) starter kit

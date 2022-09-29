# Project json-to-sql 
Hey json-to-sql! A fancy description goes here 
## First Step 
Run `node start-here.ts {package name`, for example: 
```node start-here.ts danielnaranjo/hello-world```
## Start coding
Ladies and Gentlemen, you know what to do. 
## VIP  - Very Important Part 
Please, follow those steps to [host a private NPM packages](https://andreybleme.com/2020-05-31/hosting-private-npm-packages-for-free/) for free on GitHub. If you did this step, please omit it.
## To the space and beyond
Run `npm publish`
 
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
 
 
Based on [Daniel Naranjo](https://twitter.com/naranjodaniel) starter kit

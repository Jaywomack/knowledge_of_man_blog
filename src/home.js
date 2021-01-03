import { useState } from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'my new website', body: 'lorem upsum', author: 'mario', id: 1 },
    {
      title: 'your moms new wesite',
      body: 'lorsafasfdem upasum',
      author: 'Luigi',
      id: 2,
    },
    { title: 'westsite', body: 'asdfsdf', author: 'Toad', id: 3 },
  ]);

  return (
    <div className='home'>
      <h2>HomePage</h2>
      {blogs.map((blog) => {
        return (
          <div className='blog-preview' key={blog.id}>
            <li>{blog.title}</li>
            <li>{blog.body}</li>
            <li>Written{blog.author}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

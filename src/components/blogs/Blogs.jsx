import React, { useEffect, useState } from 'react';

import Blog from '../blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => setBlogs(err));
    }, []);


    const [bookmarked, setBookmarked] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmark = (blog) => {
        // console.log(blog);
        const newBookmark = [...bookmarked, blog];
        setBookmarked(newBookmark);
    }

    const handletime = (time, id) => {
        const newTime = readingTime + time;
        setReadingTime(newTime);
        handleRemoveBookedMarked(id);
    }

    const handleRemoveBookedMarked = (id) => {
        const remaining = bookmarked.filter(bookmark => bookmark.id !== id);
        setBookmarked(remaining);
    }


    // console.log(blogs);

    return (
        <div className='container mx-auto'>
            <div className='flex mt-10 gap-6'>

                {/* Left side */}
                <div className='w-[70%]'>
                    <h1 className='text-4xl'>Total Blogs : {blogs.length}</h1>

                    {
                        blogs.map((blog, index) => <Blog
                            key={index}
                            blog={blog}
                            handleBookmark={handleBookmark}
                            handletime={handletime}
                        ></Blog>)
                    }
                </div>


                {/* Right side */}
                <div className='flex-1'>
                    <div className='text-[1.6rem] font-bold  py-4 text-center text-[#6047EC] bg-[#6047ec2c] rounded-xl'>

                        <h1  >Spent time on read : {readingTime} min</h1>
                    </div>


                    <div className='p-5 mt-10 bg-[rgba(17,17,17,0.05)] rounded-xl'>
                        <h1 className='text-[1.6rem] font-bold mb-4 ' >Bookmarked Count : {bookmarked.length}</h1>
                        {
                            bookmarked.map((marked, index) =>
                                <div key={index}
                                    className='space-y-2 mb-4  p-4 bg-white rounded-xl shadow-lg'
                                > <p
                                    className='text-2xl font-semibold'>
                                        {marked.title}</p>
                                </div>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;
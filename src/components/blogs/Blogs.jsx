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
                <div className='flex-1 border'>
                    <h1>Reading Time : {readingTime} minutes</h1>
                    <h1>Bookmarked Count : {bookmarked.length}</h1>

                    {
                        bookmarked.map((marked, index) =>
                            <p key={index}
                                className='text-2xl font-semibold mt-1 border'>
                                {marked.title}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;
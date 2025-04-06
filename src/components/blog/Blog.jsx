import React from 'react';

import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark , handletime}) => {

    return (
        <div>
            <div className='border-t-2 mt-10 mb-10 border-base-300'>
                {/* image */}
                <div className=' mt-7'>
                    <img className='h-[450px] rounded-2xl' src={blog.cover} alt="Image of Blogs" />
                </div>

                {/* title Avatar */}
                <div className='my-8 flex justify-between items-center gap-5 mx-4'>

                    <div className='flex items-center gap-5'>

                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={blog.author_img} />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold'>{blog.author}</h1>
                            <p className='text-[#11111199] textarea-lg font-semibold'>{blog.posted_date} </p>
                        </div>

                    </div>

                    <div className='font-medium textarea-xl text-[#11111199]'>
                        <h1 className='text-[#11111199] font-semibold flex items-center gap-2'>
                            {blog.reading_time} min read
                            <span><FaBookmark
                                size={20}
                                onClick={() => handleBookmark(blog)}
                            /></span></h1>
                    </div>

                </div>

                {/* title */}
                <div className='mx-4 mb-9'>
                    <h1 className='font-bold text-3xl '>
                        {blog.title}
                    </h1>

                    {/* Hashtag */}
                    <div className='flex text-[#11111199] font-semibold  my-4 gap-4'>
                        {
                            blog.hashtags.map((hashtag, index) => <p key={index} > # {hashtag}</p>)

                        }
                    </div>

                    <button
                        onClick={() => handletime(blog.reading_time, blog.id)}
                        className='text-[#6047EC] btn  text-xl font-semibold'>Mark As Read</button>
                </div>

            </div>
        </div>
    );
};

export default Blog;
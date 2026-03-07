import React from 'react';
import { BlogPost } from '../../data/blogs';
import BlogCard from './BlogCard';

interface BlogGridProps {
    blogs: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <button className="px-8 py-3 font-bold text-white transition-all rounded-lg bg-primary hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                    View All Articles
                </button>
            </div>
        </div>
    );
};

export default BlogGrid;

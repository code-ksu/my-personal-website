import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const categoryColors = {
  AI: {
    background: 'bg-gradient-to-br from-purple-50 via-purple-50/50 to-white',
    border: 'border-purple-100',
    hover: 'hover:from-purple-100 hover:via-purple-50 hover:to-white',
    tag: 'bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800'
  },
  'Work/Life Balance': {
    background: 'bg-gradient-to-br from-green-50 via-green-50/50 to-white',
    border: 'border-green-100',
    hover: 'hover:from-green-100 hover:via-green-50 hover:to-white',
    tag: 'bg-gradient-to-r from-green-100 to-green-50 text-green-800'
  },
  Business: {
    background: 'bg-gradient-to-br from-blue-50 via-blue-50/50 to-white',
    border: 'border-blue-100',
    hover: 'hover:from-blue-100 hover:via-blue-50 hover:to-white',
    tag: 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800'
  }
};

function CategoryFilter({ categories, activeCategory, onCategoryClick }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${!activeCategory 
            ? 'bg-gray-800 text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        All Posts
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${activeCategory === category 
              ? `${categoryColors[category].tag} shadow-sm` 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

function BlogPostPreview({ post, onCategoryClick }) {
  const [content, setContent] = useState('');
  const categoryStyle = categoryColors[post.category] || categoryColors['AI'];

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/blog/${post.id}.md`)
      .then(response => response.text())
      .then(text => {
        const paragraphs = text.split('\n\n');
        const firstParagraph = paragraphs.find(p => !p.startsWith('#'));
        setContent(firstParagraph || '');
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
      });
  }, [post.id]);

  const transformImagePath = (src) => {
    if (src.startsWith('/')) {
      return `${process.env.PUBLIC_URL}${src}`;
    }
    return src;
  };

  const handleCategoryClick = (e) => {
    e.preventDefault(); // Prevent the article link from being followed
    onCategoryClick(post.category);
  };

  return (
    <Link to={`/blog/${post.id}`} className="block">
      <article 
        className={`rounded-lg shadow-sm overflow-hidden transition-all duration-300 border ${categoryStyle.border} ${categoryStyle.background} ${categoryStyle.hover} hover:shadow-lg group cursor-pointer`}
      >
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-12">
              <img 
                src={transformImagePath(post.image)}
                alt={post.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={handleCategoryClick}
                className={`px-3 py-1 rounded-full text-sm font-medium ${categoryStyle.tag} hover:shadow-sm transition-shadow`}
              >
                {post.category}
              </button>
              <time className="text-sm text-gray-600">
                {post.date}
              </time>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="prose prose-sm max-w-none mb-4">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({node, ...props}) => (
                    <img {...props} src={transformImagePath(props.src)} />
                  )
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
            <div className="mt-4 flex items-center gap-1 text-blue-600 group-hover:text-blue-800 font-medium transition-colors">
              Read more 
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || null);
  
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/blog/posts.json`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
      })
      .catch(error => {
        console.error('Error loading posts:', error);
      });
  }, []);

  const categories = [...new Set(posts.map(post => post.category))];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const filteredPosts = activeCategory
    ? posts.filter(post => post.category === activeCategory)
    : posts;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
        {activeCategory && (
          <span className="text-sm text-gray-600">
            Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} in {activeCategory}
          </span>
        )}
      </div>
      
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <div className="space-y-8 pb-8">
        {filteredPosts.map((post) => (
          <BlogPostPreview 
            key={post.id} 
            post={post} 
            onCategoryClick={handleCategoryClick}
          />
        ))}
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            No posts found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
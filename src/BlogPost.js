import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const categoryColors = {
  AI: {
    background: 'bg-gradient-to-br from-purple-50 via-purple-50/30 to-white',
    text: 'text-purple-900',
    tag: 'bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800'
  },
  'Work/Life Balance': {
    background: 'bg-gradient-to-br from-green-50 via-green-50/30 to-white',
    text: 'text-green-900',
    tag: 'bg-gradient-to-r from-green-100 to-green-50 text-green-800'
  },
  Business: {
    background: 'bg-gradient-to-br from-blue-50 via-blue-50/30 to-white',
    text: 'text-blue-900',
    tag: 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800'
  }
};

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Load posts.json
    fetch(`${process.env.PUBLIC_URL}/content/blog/posts.json`)
      .then(response => response.json())
      .then(data => {
        const currentPost = data.posts.find(p => p.id === id);
        if (currentPost) {
          setPost(currentPost);

          // Load markdown content
          return fetch(`${process.env.PUBLIC_URL}/content/blog/${id}.md`);
        }
      })
      .then(response => {
        if (response) {
          return response.text();
        }
      })
      .then(text => {
        if (text) {
          setContent(text);
        }
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const categoryStyle = categoryColors[post.category] || categoryColors['AI'];

  const transformImagePath = (src) => {
    if (src.startsWith('/')) {
      return `${process.env.PUBLIC_URL}${src}`;
    }
    return src;
  };

  const handleCategoryClick = () => {
    navigate(`/blog?category=${encodeURIComponent(post.category)}`);
  };

  return (
    <div className={`min-h-screen ${categoryStyle.background}`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <article className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8">
          <header className="mb-8">
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
            <h1 className={`text-4xl font-bold mb-4 ${categoryStyle.text}`}>
              {post.title}
            </h1>
            <p className="text-xl text-gray-600">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ node, children, ...props }) => (
                    <a {...props} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {children}
                    </a>
                  ),
                }}
              >
                {post.excerpt}
              </ReactMarkdown>
            </p>
          </header>

          <img
            src={transformImagePath(post.image)}
            alt={post.title}
            className="w-full h-96 object-cover mb-8"
          />

          <div className="prose prose-lg prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    src={transformImagePath(props.src)}
                    alt={props.alt || 'content visualisation'}
                    style={{ maxHeight: 'none' }}
                  />
                ),
                a: ({ node, children, ...props }) => (
                  <a {...props} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {children}
                  </a>
                ),
                code: ({ node, inline, ...props }) => (
                  inline ?
                    <code {...props} className="bg-gray-100 rounded px-1 py-0.5" /> :
                    <code {...props} className="block bg-gray-100 rounded p-4" />
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;

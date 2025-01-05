import './App.css';
import { 
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter
} from 'react-router';

import About from './About';
import Impressum from './Impressum';
import Header from './Header';
import Footer from './Footer';
import PodcastPage from './podcast-page';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import Consultancy from './Consultancy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<About />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/podcast" element={<PodcastPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultancy" element={<Consultancy />} />
    </>
  )
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-pink-50">
      <Header></Header>
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

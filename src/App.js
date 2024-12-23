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


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<About />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/podcast" element={<PodcastPage />} />
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

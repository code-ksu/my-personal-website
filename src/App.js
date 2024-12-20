import './App.css';
import { 
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter
} from 'react-router';

import HomePage from './HomePage';
import Impressum from './Impressum';
import Header from './Header';
import Footer from './Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/impressum" element={<Impressum />} />
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

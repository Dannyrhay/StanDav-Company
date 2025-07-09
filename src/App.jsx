import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// Layout
import RootLayout from './layout/RootLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SplashPage from './components/SplashPage';

// Create the router outside of the component
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'properties', element: <Listings /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      { path: 'add-listing', element: <Contact /> }, // Example route for the button
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <SplashPage onAnimationComplete={handleAnimationComplete} />;
  }

  return <RouterProvider router={router} />;
}

export default App;

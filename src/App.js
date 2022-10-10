import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/services', element: <Services></Services>
        },
        {
          path: '/contact', element: <Contact></Contact>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Quizes from './components/Quizes/Quizes';
import NotFoundPage from './components/404/NotFoundPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/services',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Services></Services>
        },
        {
          path: '/contact', element: <Contact></Contact>
        },
        {
          path:'/quizes/:id',
          loader: async ({params}) => {
            // console.log(params);
            // return fetch('https://openapi.programming-hero.com/api/quiz/2')
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quizes></Quizes>
        },
        {
          path:'*' , element:<NotFoundPage></NotFoundPage>
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

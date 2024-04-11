import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mercury from './Page/Mercury/Mercury.tsx';
import Venus from './Page/Venus/Venus.tsx';
import Earth from './Page/Earth/Earth.tsx';
import Jupiter from './Page/Jupiter/Jupiter.tsx';
import Saturn from './Page/Saturn/Saturn.tsx';
import Uranus from './Page/Uranus/Uranus.tsx';
import Neptune from './Page/Neptune/Neptune.tsx';
import Mars from './Page/Mars/Mars.tsx';
import Structure from './Page/Mercury/Structure.tsx';
import Geology from './Page/Mercury/Geology.tsx';
import NeptuneStructure from './Page/Neptune/NeptuneStructure.tsx';
import Neptunegeology from './Page/Neptune/Neptungeology.tsx';
import Earthstructure from './Page/Earth/Earthstructure.tsx';
import Venusstructure from './Page/Venus/Venusstrucrure.tsx';
import Venusgeology from './Page/Venus/Venusgeology.tsx';

import Marsstructure from './Page/Mars/Marsstructure.tsx';
import Marsgeology from './Page/Mars/Marsgeology.tsx';
import Jupiterstructure from './Page/Jupiter/Jupiterstructure.tsx';
import Jupitergeology from './Page/Jupiter/Jupitergeology.tsx';
import Saturnstructure from './Page/Saturn/Saturnstructure.tsx';
import Saturngeology from './assets/Saturn/saturn3.png'
import Uranusstructure from './Page/Uranus/Uranusstructure.tsx';
import Uranusgeology from './Page/Uranus/Uranusgeology.tsx';
import Earthgeology from './Page/Earth/Earthgeology.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/mercury",
    element: <Mercury />
  },
  {
    path: "/venus",
    element: <Venus />
  },
  {
    path: "/earth",
    element: <Earth />
  },
  {
    path: "/mars",
    element: <Mars />
  },
  {
    path: "/jupiter",
    element: <Jupiter />
  },
  {
    path: "/saturn",
    element: <Saturn />
  },
  {
    path: "/uranus",
    element: <Uranus />
  },
  {
    path: "/neptune",
    element: <Neptune />
  },
  {
    path: "/Structure",
    element: <Structure />
  },
  {
    path: "/geology",
    element: <Geology />
  },
  {
    path: "/neptuneStructure",
    element: <NeptuneStructure />
  },
  {
    path: "/earthstructure",
    element: <Earthstructure />
  },
  {
    path: "/earthgeology",
    element: <Earthgeology />
  },
  {
    path: "/neptunegeology",
    element: <Neptunegeology />
  },
  {
    path: "/venusstructure",
    element: <Venusstructure />
  },
  {
    path: "/venusgeology",
    element: <Venusgeology />
   
  },
  {
    path: "/marsstructure",
    element: <Marsstructure />
  },
  {
    path: "/marsgeology",
    element: <Marsgeology />
  },
  {
    path: "/jupiterstructure",
    element: <Jupiterstructure />
  },
  {
    path: "/jupitergeology",
    element: <Jupitergeology />
  },
  {
    path: "/saturnstructure",
    element: <Saturnstructure />
  },
  {
    path: "/saturngeology",
    element: <Saturngeology />
  },
  {
    path: "/uranusstructure",
    element: <Uranusstructure />
  },
  {
    path: "/saturngeology",
    element: <Uranusgeology />
  },



  

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
   <RouterProvider router={router} />
)

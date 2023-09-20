import './App.css';
import { RouterProvider } from 'react-router-dom'
import { routers } from './routing'


function App() {
  return (
   <>
      <RouterProvider router={routers}/>
   </>
  );
}

export default App;

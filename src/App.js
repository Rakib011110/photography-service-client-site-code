import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './page/Router/Router';

function App() {
  return (
    <div className="App max-w-screen-xl	m-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

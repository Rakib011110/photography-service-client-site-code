import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './page/Router/Router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



function App() {
  AOS.init();

  return (
    <div className="App max-w-screen-xl	m-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

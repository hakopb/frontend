/* Font imports */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ResponsiveDrawer from "./App";
import History from './pages/History';
import Tracking from './pages/Tracking';
import Booking from './pages/Booking';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import FetchTest from './pages/FetchTest';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<ResponsiveDrawer />}>
      <Route path="login" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      <Route path="book_shipping" element={<Booking />} />
      <Route path="test" element={<FetchTest />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="history" element={<History />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
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
import BookShipping from "./pages/BookShipping";
import Login from './pages/Login';
import History from './pages/History';
import Tracking from './pages/Tracking';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ResponsiveDrawer />}>
      <Route path="login" element={<Login />} />
      <Route path="book_shipping" element={<BookShipping />} />
      <Route path="tracking" element={<History />} />
      <Route path="history" element={<Tracking />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
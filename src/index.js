import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Frontend";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Post from "./Pages/Post";
import Page from "./Pages/Page";
import AllPosts from "./Pages/AllPosts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:slug" element={<Post />} />
          <Route path="page/:slug" element={<Page />} />
          <Route path="posts/" element={<AllPosts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

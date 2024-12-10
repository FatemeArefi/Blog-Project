import Layout from "./components/layout";
import HomePage from "./components/layout/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/layout/Blog/BlogPage";
import AuthorPage from "./components/layout/authors/AuthorPage";
import ScrollToTop from "./components/layout/shared/ScrollToTop";

const App = () => {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

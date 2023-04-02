import { lazy, Suspense } from 'react';
// React Routing Dom Library
import { Route, Routes } from "react-router-dom";
// Dashboard Page
import HomePage from './pages/Home/index';
// Configure of the SCSS
import "./styles/style.scss";

// Dynamic Imports(Code Splittings)
const NotFoundPage = lazy(() => import("./pages/404/index"));

const App = () => {

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        {
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        }
      </Suspense>
    </>
  );
};

export default App;

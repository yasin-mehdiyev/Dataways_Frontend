import { lazy, Suspense, useEffect, useState } from "react";
// React Routing Dom Library
import { Route, Routes } from "react-router-dom";
// Components
import Loader from "./components/Layout/Loader";
// Dashboard Page
import HomePage from "./pages/Home/index";
// Configure of the SCSS
import "./styles/style.scss";

// Dynamic Imports(Code Splittings)
const NotFoundPage = lazy(() => import("./pages/404/index"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader isLoad={isLoading} />
      ) : (
        <Suspense
          fallback={
            <>
              <Loader />
            </>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;

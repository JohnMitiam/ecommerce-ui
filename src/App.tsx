import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Layout } from "./core/pages/Layout";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default App;

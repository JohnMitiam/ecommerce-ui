import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./core/pages/Layout/Header";
import { Layout } from "./core/pages/Layout/Layout";

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

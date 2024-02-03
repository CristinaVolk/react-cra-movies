import './App.css';
import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Navigation} from "../shared/UI/Navigation/Navigation";
import {Outlet} from "react-router-dom";

export function App() {
  return (
    <MainLayout
        header={<Navigation />}
        left={"left"}
        right={"right"}
        content={<Outlet />}
        footer={"footer"}
    />
  );
}


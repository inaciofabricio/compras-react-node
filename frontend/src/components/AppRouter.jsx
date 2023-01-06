import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Compras from "../pages/Compras";
import Compra from "../pages/Compra";
import Login from "../pages/Login";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import NovoUsuario from "../pages/NovoUsuario";
import PageNotFound from "../pages/PageNotFound";


const Page = styled.main`
    min-height: calc(100vh - 200px);
`;

const isAuth = () => {
    return localStorage.getItem('access_token'); 
}

const AppRouters = () => {
    let routes = useRoutes([
        { path: "/", element: <Login /> },
        { path: "/esqueceu-senha", element: <EsqueceuSenha /> },
        { path: "/novo-usuario", element: <NovoUsuario /> },
        { path: "/compras", element: isAuth() ? <Compras /> : <Navigate to="/" /> },
        { path: "/compra/:id", element: isAuth() ? <Compra /> : <Navigate to="/" /> },
        { path: "page-not-found", element: <PageNotFound /> },
        { path: "*", element: <Navigate to="/page-not-found" /> }
    ]);
    return routes;
  };

const AppRouter = () => {
    return (
        <Router>
            <Header/>
            <Page>
                <AppRouters /> 
            </Page>
            <Footer />
        </Router>
    )
};

export default AppRouter;
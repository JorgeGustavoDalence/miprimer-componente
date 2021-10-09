import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import ItemListContainer from "./components/ItemListContainer";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Footer from "./components/footer";
import Contenido from "./components/Contenido";
import Accesorios from "./components/Accesorios";

function App() {
  const storeInfo = {
    storeName: "CeluTienda",
    categories: [
      { id: 1, title: "Celulares", link: "/celulares" },
      { id: 2, title: "Accesorios", link: "/accesorios" },
      { id: 4, title: "Marcas", link: "/marcas" },
    ],
  };

  return (
    <BrowserRouter>
      <NavBar storeInfo={storeInfo} />
      <Switch>
        <Route exact path="/">
          <Contenido />
        </Route>
        <Route path="/celulares">
          <h1 className="celu">CELUTIENDA</h1>
          <Container>
            <hr />
            <ItemListContainer />
          </Container>
        </Route>
        <Route path="/accesorios">
          <h1 className="celu">CELUTIENDA</h1>
          <Container>
            <hr />
            <Accesorios />
          </Container>
        </Route>
        <Route path="/marcas">
          <ServersHandler />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const ServersHandler = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <h1 className="celu">CELUTIENDA</h1>
      <ul>
        <li>
          <Link to={`${url}/Samsung`}>Samsung</Link>
        </li>
        <li>
          <Link to={`${url}/Iphone`}>Iphone</Link>
        </li>
        <li>
          <Link to={`${url}/Huawei`}>Huawei</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3 className="marca">Seleccione una marca</h3>
        </Route>
        <Route path={`${path}/:svrbranch`}>
          <ServerBranch />
        </Route>
      </Switch>
    </>
  );
};

const ServerBranch = () => {
  let { svrbranch } = useParams();

  return (
    <>
      <h1 className="subtitulo">{svrbranch}</h1>
    </>
  );
};

export default App;

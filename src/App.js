import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

const Inicio = () => { 
  return (
    <div>
    <h1 style={{color: "purple"}}>Mis rutas</h1>
    <Link to={"/home"}>Ir a Home</Link> 
    {'  '}
    |
    {'  '}
    <Link to={"/4"}>Ir a Number</Link> 
    {'  '}
    |
    {'  '}
    <Link to={"/hello"}>Ir a Hello</Link> 
    {'  '}
    |
    {'  '}
    <Link to={"/hello/blue/red"}>Ir a Hello Color</Link> 
    </div>
  );
}

const Home = () => { 
  return (
    <div>
    <h1>Welcome</h1>
    <Link to={"/"}>Volver al inicio</Link> 
    </div>
  );
}

const Number = () => { 
  return (
    <div>
    <h1>The number is: 4</h1>
    <Link to={"/"}>Volver al inicio</Link> 
    </div>
  );
}

const Hello = () => { 
  return (
    <div>
    <h1>The word is: hello</h1>
    <Link to={"/"}>Volver al inicio</Link> 
    </div>
  );
}

const HelloColor = () => { 
    const headingStyle = {
      color: "blue",
      backgroundColor: "tomato",
      padding: "20px",
    };
    return (
    <div>
    <h1 style={headingStyle}>The word is: hello</h1>
    <Link to={"/"}>Volver al inicio</Link> 
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/4" element={<Number />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hello/blue/red" element={<HelloColor />} />
      </Routes>

    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <div className="container-app">
        <h2>Welcome</h2>
        <h4>To</h4>
        <h1>Library Management System</h1>

        <div className="container-auth">
          <Link to={"/signin"}><button className="btn signin">Sign in</button></Link>
          <Link to={"/signup"}><button className="btn signup">Sign up</button></Link>
        </div>
      </div>
    </>
  )
}

export default App;

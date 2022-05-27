import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddSong from "./components/AddSong";
// import LoginSpotify from "./components/LoginSpotify";
import Main from "./views/Main"
import './static/css/style.css'
import './static/css/BG.css'

function App() {
  return (
    <div className="content">
      <div className="container ">
      <h1 className="title"> For When I...</h1>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginSpotify />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/song/new" element={<AddSong />} />
        </Routes>
      </BrowserRouter>
      </div>
      <div className="box">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

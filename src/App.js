import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChannelDetail from "./components/ChannelDetail";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import WatchVideo from "./components/WatchVideo";

function App() {
  return (
    <HashRouter basename="/youtubeclone">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video/:id" element={<WatchVideo />}></Route>
        <Route path="/channel/:id" element={<ChannelDetail />}></Route>
        <Route path="/search/:searchTerm" element={<SearchResults />}></Route>
      </Routes>
      <div className="blurr"></div>

    </HashRouter>

  );
}

export default App;

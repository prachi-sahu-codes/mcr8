import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { EventDetail } from "./pages/EventDetail";
import { AiOutlineSearch } from "react-icons/ai";
import meetup from "./assets/meetup.svg";
import "./App.css";
import { useData } from "./context/DataContext";

function App() {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="navigation">
        <img src={meetup} alt="logo" onClick={() => navigate("/")} />
        <div className="search">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search by title and tags"
            className="input-search"
            value={state.searchterm}
            onChange={(e) =>
              dispatch({ type: "SEARCH", payload: e.target.value })
            }
          />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;

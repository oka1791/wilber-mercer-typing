import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import Home from "./components/Home";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Box as="h1" my={10}>
        <Link to="/">Typing game</Link>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="1" element={<Game level={1} />} />
        <Route path="2" element={<Game level={2} />} />
        <Route path="3" element={<Game level={3} />} />
      </Routes>
    </>
  );
};

export default App;

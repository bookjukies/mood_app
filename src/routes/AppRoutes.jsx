import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Mood from "./pages/Mood";
import Post from "./pages/Post";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mood" element={<Mood />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mood/post" element={<Post />} />
        <Route path="/mood/feed" element={<Feed />} />
         <Route path="/mood/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

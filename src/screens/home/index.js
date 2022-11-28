import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { setClientToken } from "../../spotify";
import Login from "../auth/login";
import Favorites from "../favorites";
import Feed from "../feed/index.js";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import "./home.css";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/player" element={<Player />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

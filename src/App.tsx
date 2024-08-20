import "./App.css";
import React, { useState } from "react";
import Post from "./components/Post";
import SideBar from "./components/SideBar";

function App() {
  const [post] = useState({
    title: "Titulo maneiro",
    content: "era para ter algo relavante aqui",
  });

  return (
    <div className="App">
      <header className="App-header">
        <SideBar post={post} />
        <Post post={post} totalComments={23} />
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import Post from "./components/Post";
import Card from "./components/Card";

function App() {
  const [post] = useState({
    title: "Titulo maneiro",
    content: "era para ter algo relavante aqui",
  });

  return (
    <div className="App">
      <header className="App-header">
        <Card align="left" title="card">
          <Post post={post} totalComments={23} />
        </Card>
      </header>
    </div>
  );
}

export default App;

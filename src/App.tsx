import "./App.css";
import React, { useState } from "react";
import Post, { PostObject } from "./components/Post";
import Card from "./components/Card";

function App() {
  const [post, setPost] = useState<PostObject | undefined>({
    title: "Titulo maneiro",
    content: "era para ter algo relavante aqui",
  });

  return (
    <div className="App">
      <header className="App-header">
        {!!post && (
          <Card align="left" title="card">
            <Post post={post} totalComments={23} />
          </Card>
        )}

        <button
          onClick={() => {
            setPost(undefined);
          }}
        >
          Remover post
        </button>
      </header>
    </div>
  );
}

export default App;

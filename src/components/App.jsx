import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([
    { title: "Suvam", content: "This is made by me." }
  ]);

  function deleteItem(idx) {
    setItems(() => items.filter((item, index) => index !== idx));
  }

  function addItem(newItem) {
    setItems(() => [...items, newItem]);
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItem} />
      {items.map((item, idx) => (
        <Note
          key={idx}
          index={idx}
          title={item.title}
          content={item.content}
          delete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

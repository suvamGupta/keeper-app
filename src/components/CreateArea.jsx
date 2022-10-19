import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem(() => {
      return { ...item, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={item.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={item.content}
        />
        <button
          onClick={() => {
            props.add(item);
            setItem({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

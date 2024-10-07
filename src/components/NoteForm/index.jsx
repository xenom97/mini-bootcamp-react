import { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";
import BaseInput from "../Base/Input";
import BaseButton from "../Base/Button";

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSave = () => {
    if (title && content) {
      onAdd({ title, content, id: Date.now() });
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="note-form">
      <BaseInput
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <BaseInput
        type="textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <BaseButton onClick={onSave}>Save</BaseButton>
    </div>
  );
};

NoteForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NoteForm;

import PropTypes from "prop-types";
import "./index.css";

const NoteList = ({ notes }) => {
  const list = () => {
    return notes.map((note, idx) => (
      <li className="list-item" key={idx}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </li>
    ));
  };

  return <ul className="list-container">{list()}</ul>;
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;

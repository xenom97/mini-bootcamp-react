import PropTypes from "prop-types";
import BaseCard from "../Base/Card";

const NoteList = ({ notes, onDelete }) => {
  return notes.map((note) => (
    <BaseCard
      key={note.id}
      title={note.title}
      content={note.content}
      action={() => onDelete(note.id)}
      actionText="Delete"
    />
  ));
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;

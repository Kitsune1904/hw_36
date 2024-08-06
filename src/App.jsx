import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import NoteItem from "./components/NoteItem";
import User from "./components/User";

function App() {
  const [notesArr, setNotesArr] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesArr))
  }, [notesArr]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      clickHandler()
    }
  }, [notesArr])

  const clickHandler = useCallback(() => {
    const inputVal = inputRef.current.value;
    if (inputVal != "") {
      setNotesArr([...notesArr, inputVal]);
    } else {
      alert("Fild can`t be empty");
    }
    inputRef.current.value = "";
  }, [notesArr]);

  const deleteNote = useCallback(
    (event) => {
      const deletedNote = Number(event.target.getAttribute("data-index"));
      notesArr.splice(deletedNote, 1);
      setNotesArr([...notesArr]);
    },
    [notesArr]
  );

  return (
    <>
      <div className="inputHolder">
        <input type="text" maxLength={20} ref={inputRef} onKeyDown={handleKeyDown}></input>
        <button onClick={clickHandler}>Add note</button>
      </div>
      <div className="usersHolder">
        <User/>
      </div>
      <div className="notesListHolder">
        {notesArr.length == 0 ? (
          <p>User`s note list is empty</p>
        ) : (
          <NoteList>
            {notesArr.map((note, index) => (
              <NoteItem
                key={index}
                note={note}
                id={index}
                delete={(event) => deleteNote(event)}
              />
            ))}
          </NoteList>
        )}
      </div>
      
    </>
  );
}

export default App;

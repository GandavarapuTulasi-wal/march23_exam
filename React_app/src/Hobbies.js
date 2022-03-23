import axios from 'axios';
import { useEffect, useState } from 'react';

function Hobbies() {
  let [hobbies, setHobby] = useState([]);
  useEffect(() => {
    getHobbies();
  }, []);
  const getHobbies = () => {
    axios
      .get('/hobbies')
      .then((res) => {
        setHobby(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addHobby = (event) => {
    event.preventDefault();
    const hobbyObject = {
      name: event.target.name.value,
      description: event.target.description.value,
      date_of_creation: event.target.date_of_creation.value,
    };
    axios
      .post('/hobbies', hobbyObject)
      .then((res) => {
        getHobbies();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteHobby = (_id) => {
    console.log(_id);
    axios
      .delete(`/hobbies/${_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobbies();
  };
  console.log(hobbies);
  return (
    <div className="card-container">
      <h1>Hobbies Form</h1>
      <form onSubmit={addHobby} className="box">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="todo-user-input"
        />
        <textarea
          cols="20"
          rows="5"
          placeholder="Enter Description"
          name="description"
          className="todo-user-input"
        ></textarea>
        <input
          type="date"
          name="date_of_creation"
          className="todo-user-input"
        />
        <button>Add</button>
      </form>
      <div>
        <h1>Hobbies</h1>
        {hobbies.map((val, index) => (
          <div className="card">
            <h3>{val.name}</h3>
            <p>{val.description}</p>
            <p>{val.date_of_creation}</p>
            <button
              className="delete"
              onClick={() => {
                deleteHobby(val['_id']);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hobbies;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import api from "../../api/baseURL";

const AddAgenda = ({ closeModal }) => {
  const [exam, setExam] = useState({ title: "", start: "", end: "", room: "" });

  const { title, start, end, room } = exam;

  const onInputChange = (e) => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  const addExam = async (e, closeModal) => {
    e.preventDefault();
    try {
      await api.post("/exam", exam);
      closeModal();
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h3 className="card-header text-center">Add new exam</h3>
              <div className="card-body">
                <form onSubmit={(e) => addExam(e, closeModal)}>
                  <div className="form-group">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Add title"
                      name="title"
                      className="form-control"
                      value={title}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      placeholderText="Start date"
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={start}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      placeholderText="End date"
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={end}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form-group">
                    <select onChange={(e) => onInputChange(e)}>
                      {rooms
                        ? //check first if it is available then do another ternary operation for the following code
                          rooms.map((room) => {
                            <option key={room.id} value={room.id}>
                              {room.id}
                            </option>;
                          })
                        : null}
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Add
                  </button>
                  <button
                    className="btn btn-danger btn-block"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAgenda;

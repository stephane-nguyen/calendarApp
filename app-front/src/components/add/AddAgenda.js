import React, { useState } from "react";
import DatePicker from "react-datepicker";
import api from "../../api/baseURL";

const AddAgenda = ({ exams, setExams, closeModal }) => {
  const [exam, setExam] = useState({ title: "", start: "", end: "" });
  // const [exam, setExam] = useState({ title: "", start: "", end: "", room: "" });

  const { title, start, end } = exam;
  // const { title, start, end, room } = exam;

  const addExam = async (e, closeModal) => {
    e.preventDefault();
    try {
      await api.post("/exam", exam);
      setExam([...exams, exam]);
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
                      onChange={(e) =>
                        setExams({ ...exam, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      placeholderText="Start date"
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={start}
                      onChange={(e) => setExams({ ...exam, start: start })}
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      placeholderText="End date"
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={end}
                      onChange={(e) => setExams({ ...exam, end: end })}
                    />
                  </div>
                  {/* 
                  <div className="form-group">
                    <select
                      onChange={(e) =>
                        setExams({ ...exam, room: e.target.value })
                      }
                    >
                      {rooms
                        ? rooms.map((room) => {
                            <option key={room.id} value={room.id}>
                              {room.id}
                            </option>;
                          })
                        : null}
                    </select>
                  </div> */}

                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
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

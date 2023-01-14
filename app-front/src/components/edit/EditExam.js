import React, { useState, useEffect } from "react";
import api from "../../api/baseURL";
import DatePicker from "react-datepicker";
import { handleTimeColor } from "../Agenda";

function EditAgenda({ exams, setExams, id, closeModal }) {
  const [exam, setExam] = useState({
    nameSubject: "",
    startDate: null,
    endDate: null,
    room: null,
  });

  const [subjects, setSubjects] = useState([]);
  const [rooms, setRooms] = useState([]);

  const { nameSubject, startDate, endDate, room } = exam;

  useEffect(() => {
    const getAllSubjects = async () => {
      try {
        const response = await api.get("/subject");
        setSubjects(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`error: ${err.message}`);
        }
      }
    };
    const loadRooms = async () => {
      try {
        const response = await api.get("/room");
        setRooms(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`error: ${err.message}`);
        }
      }
    };
    getAllSubjects();
    loadRooms();
  }, []);

  const onInputChange = (e) => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  const editExam = async (e, closeModal) => {
    e.preventDefault();
    try {
      const response = await api.put(`/exam/${id}`, exam);
      setExams(
        exams.map((exam) =>
          //if not, we keep the Exam as it is because we didnt update it
          exam.idExam === id ? { ...response.data } : exam
        )
      );
      setExam({ nameSubject: "", startDate: null, endDate: null, room: null });
      closeModal();
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">Edit Exam</h3>
            <div className="card-body">
              <form onSubmit={(e) => editExam(e, closeModal)}>
                <div className="form-group">
                  <label htmlFor="subject-select">Subject</label>
                  <br />
                  <select
                    id="subject-select"
                    className="form-select"
                    onChange={(e) =>
                      setExam({ ...exam, nameSubject: e.target.value })
                    }
                  >
                    <option value=""></option>
                    {subjects
                      ? subjects.map((subject) => (
                          <option
                            key={subject.nameSubject}
                            value={subject.nameSubject}
                          >
                            {subject.nameSubject}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="form-group">
                  <span>Start date</span>
                  <DatePicker
                    placeholderText="Select Start Date"
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    selected={startDate}
                    selectsStart
                    endDate={endDate}
                    timeClassName={handleTimeColor}
                    onChange={(startDate) =>
                      setExam({ ...exam, startDate: startDate })
                    }
                  />
                </div>
                <div className="form-group">
                  <span>End date</span>
                  <DatePicker
                    placeholderText="Select End Date"
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    minDate={startDate}
                    timeClassName={handleTimeColor}
                    onChange={(endDate) => {
                      setExam({
                        ...exam,
                        endDate: endDate,
                      });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="room-select">Room</label>
                  <br />
                  <select
                    id="room-select"
                    className="form-select"
                    onChange={(e) => setExam({ ...exam, room: e.target.value })}
                  >
                    <option value=""></option>
                    {rooms
                      ? rooms.map((room) => (
                          <option key={room.idRoom} value={room.idRoom}>
                            {room.idRoom}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Edit
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
  );
}

export default EditAgenda;

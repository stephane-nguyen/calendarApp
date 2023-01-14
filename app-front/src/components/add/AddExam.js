import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import api from "../../api/baseURL";

const AddExam = ({ exams, setExams, closeModal }) => {
  const [exam, setExam] = useState({
    nameSubject: "",
    startDate: new Date(),
    endDate: new Date(),
    room: null,
  });

  const [subjects, setSubjects] = useState([]);
  const [rooms, setRooms] = useState([]);

  const { nameSubject, startDate, endDate, room } = exam;

  let handleTimeColor = (time) => {
    return time.getHours() > 7 && time.getHours() < 17
      ? "text-success"
      : "text-error";
  };

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

  const addExam = async (e, closeModal) => {
    e.preventDefault();
    try {
      const response = await api.post("/exam", exam);
      console.log(response);
      setExams([...exams, response.data]);
      setExam({ nameSubject: "", startDate: new Date(), endDate: new Date() });
      closeModal();
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };

  const onSelectChange = (e) => {
    setExam({ ...exam, [e.target.name]: e.target.select });
  };

  const onSubmit = async (e, closeModal) => {
    e.preventDefault();
    try {
      await api.post("/exam", exam);
      closeModal();
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">Add new exam</h3>
            <div className="card-body">
              <form onSubmit={(e) => onSubmit(e, closeModal)}>
                <div className="form-group">
                  <label htmlFor="subject-select">Subject</label>
                  <br />
                  <select
                    id="subject-select"
                    onChange={(e) =>
                      setExams({ ...exam, nameSubject: e.target.value })
                    }
                  >
                    <option value=""></option>
                    {subjects
                      ? subjects.map((subject) => (
                          <option
                            key={subject.idSubject}
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
                    placeholderText="startDate"
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    selected={startDate}
                    timeClassName={handleTimeColor}
                    // onChange={(e) => setExams({ ...exam, startDate: startDate })}
                    onChange={(e) => onSelectChange(e)}
                  />
                </div>
                <div className="form-group">
                  <span>End date</span>
                  <DatePicker
                    placeholderText="endDate"
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    selected={endDate}
                    timeClassName={handleTimeColor}
                    // onChange={(e) => setExams({ ...exam, endDate: endDate })}
                    onChange={(e) => onSelectChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="room-select">Room</label>
                  <br />
                  <select
                    id="room-select"
                    onChange={(e) =>
                      setExams({ ...exam, room: e.target.value })
                    }
                  >
                    <option value=""></option>
                    {rooms
                      ? rooms.map((room) => (
                          <option key={room.id_room} value={room.id_room}>
                            {room.id_room}
                          </option>
                        ))
                      : null}
                  </select>
                </div>

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
  );
};

export default AddExam;

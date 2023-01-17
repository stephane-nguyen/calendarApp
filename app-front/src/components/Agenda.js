import Modal from "./Modal";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Francais",
    start: new Date(2023, 0, 16, 8, 30, 0),
    end: new Date(2023, 0, 16, 10, 30, 0),
  },
  {
    title: "Physique",
    start: new Date(2023, 0, 16, 14, 30, 0),
    end: new Date(2023, 0, 16, 16, 0, 0),
  },
  {
    title: "Mathématiques",
    //year,month,day,hours,min,secondes
    start: new Date(2023, 0, 17, 8, 0, 0),
    end: new Date(2023, 0, 17, 12, 0, 0),
  },
  {
    title: "SES",
    start: new Date(2023, 0, 17, 14, 0, 0),
    end: new Date(2023, 0, 17, 16, 0, 0),
  },
  {
    title: "C++",
    start: new Date(2023, 0, 18, 14, 30, 0),
    end: new Date(2023, 0, 18, 17, 0, 0),
  },
  {
    title: "Traitement et administration de base de données",
    start: new Date(2023, 0, 18, 9, 0, 0),
    end: new Date(2023, 0, 18, 11, 30, 0),
  },
  {
    title: "Histoire",
    start: new Date(2023, 0, 19, 9, 0, 0),
    end: new Date(2023, 0, 19, 11, 0, 0),
  },
  {
    title: "Comptabilité",
    start: new Date(2023, 0, 19, 15, 0, 0),
    end: new Date(2023, 0, 19, 17, 30, 0),
  },
  {
    title: "Géopolitique",
    start: new Date(2023, 0, 20, 8, 30, 0),
    end: new Date(2023, 0, 20, 11, 30, 0),
  },
  {
    title: "Théorie Monte-Carlo",
    start: new Date(2023, 0, 20, 13, 30, 0),
    end: new Date(2023, 0, 20, 15, 30, 0),
  },
  {
    title: "IA Applications",
    start: new Date(2023, 0, 21, 8, 30, 0),
    end: new Date(2023, 0, 21, 11, 0, 0),
  },
  {
    title: "Danse",
    start: new Date(2023, 0, 21, 13, 30, 0),
    end: new Date(2023, 0, 21, 16, 0, 0),
  },
];

function Agenda() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [isAddOpen, setIsAddOpen] = useState(false);
  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);
    setIsAddOpen(false);
  }

  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-primary mt-3"
          onClick={() => setIsAddOpen(true)}
        >
          Add Exam
        </button>
      </div>
      <Modal open={isAddOpen}>
        <div
          className="card"
          style={{ width: "80%", padding: "2rem", margin: "2rem auto" }}
        >
          <div className="card-body">
            <h5 className="card-title">Add Exam</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add Subject"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <DatePicker
                className="form-control"
                placeholderText="Start Date"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeClassName={handleTimeColor}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
            </div>
            <div className="form-group">
              <DatePicker
                className="form-control"
                placeholderText="End Date"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeClassName={handleTimeColor}
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <button
                type="submit"
                onClick={handleAddEvent}
                className="btn btn-primary"
              >
                Submit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => setIsAddOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </>
  );
}

export default Agenda;
export function handleTimeColor(time) {
  return time.getHours() > 7 && time.getHours() < 17
    ? "text-success"
    : "text-error";
}

// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import { getDay } from "date-fns";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-datepicker/dist/react-datepicker.css";
// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import api from "../api/baseURL";
// import EditAgenda from "./edit/EditExam";
// import ExamList from "./list/ExamList";
// //DATA
// const [allExams, setAllExams] = useState([]);

// const [id, setId] = useState(null);

// //MODAL
// const [isAddExamOpen, setIsAddExamOpen] = useState(false);
// const [isEditExamOpen, setIsEditExamOpen] = useState(false);

// useEffect(() => {
//   const getAllExams = async () => {
//     try {
//       const response = await api.get("/exam");
//       setAllExams(response.data);
//     } catch (err) {
//       //not in 200 range status code
//       if (err.response) {
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//       } else {
//         console.log(`error: ${err.message}`);
//       }
//     }
//   };
//   getAllExams();
// }, []);

/**
 * DB has different attributes for Calendar events property.
 * We create here a new array with the right attributes
 */
// const [calendarEvents, setCalendarEvents] = useState([]);

// useEffect(() => {
//   const getSubjectNameFromSubjectId = async (id) => {
//     const res = await api.get(`/examSubject/${id}`);
//     return res.data;
//   };

//   const createCalendarEvents = async () => {
//     const promises = allExams.map(async (exam) => {
//       const subjectName = await getSubjectNameFromSubjectId(
//         exam.subjects_id_subjects
//       );
//       return {
//         title: subjectName,
//         start: new Date(exam.startDate),
//         end: new Date(exam.endDate),
//       };
//     });

//     const events = await Promise.all(promises);
//     setCalendarEvents(events);
//   };

//   createCalendarEvents();
// }, [allExams]);

// const deleteExam = async (id) => {
//   try {
//     await api.delete(`exam/${id}`);
//     setAllExams(allExams.filter((exam) => exam.id !== id));
//   } catch (err) {
//     console.log(`error: ${err.message}`);
//   }
// };

// return (
//   <>
//     <div className="text-center">
//       <button
//         className="btn btn-primary mt-3"
//         onClick={() => setIsAddExamOpen(true)}
//       >
//         Add Exam
//       </button>
//       {/* <Modal open={isAddExamOpen}>
//         <AddExam
//           allExams={allExams}
//           setExams={setAllExams}
//           closeModal={() => setIsAddExamOpen(false)}
//         />
//       </Modal> */}
//       <Modal open={isEditExamOpen}>
//         <EditAgenda
//           exams={allExams}
//           setExams={setAllExams}
//           id={id}
//           closeModal={() => setIsEditExamOpen(false)}
//         />
//       </Modal>
//     </div>

//     <Calendar
//       localizer={localizer}
//       events={allEvents}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500, margin: "50px" }}
//     />
//     {/* <ExamList
//       exams={allExams}
//       setId={setId}
//       setIsEditExamOpen={setIsEditExamOpen}
//       deleteExam={deleteExam}
//     /> */}
//   </>
// );

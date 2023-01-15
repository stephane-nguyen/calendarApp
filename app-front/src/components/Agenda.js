import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

import api from "../api/baseURL";
import Modal from "./Modal";

import AddExam from "./add/AddExam";
import EditAgenda from "./edit/EditExam";
import ExamList from "./list/ExamList";

const locales = { "en-US": require("date-fns/locale/en-US") };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const events = [
//   {
//     title: "maths",
//     allDay: true,
//     start: new Date(),
//     end: new Date(2022, 12, 0),
//   },
//   {
//     title: "histoire",
//     start: new Date(2023, 1, 3),
//     end: new Date(2023, 1, 6),
//   },
//   {
//     title: "français",
//     start: new Date(2022, 12, 0),
//     end: new Date(2022, 12, 0),
//   },
// ];

function Agenda() {
  //DATA
  const [exams, setExams] = useState([]);

  const [id, setId] = useState(null);

  //MODAL
  const [isAddExamOpen, setIsAddExamOpen] = useState(false);
  const [isEditExamOpen, setIsEditExamOpen] = useState(false);

  useEffect(() => {
    const getAllExams = async () => {
      try {
        const response = await api.get("/exam");
        setExams(response.data);
      } catch (err) {
        //not in 200 range status code
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`error: ${err.message}`);
        }
      }
    };
    getAllExams();
  }, []);

  const deleteExam = async (id) => {
    try {
      await api.delete(`exam/${id}`);
      setExams(exams.filter((exam) => exam.id !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-primary mt-3"
          onClick={() => setIsAddExamOpen(true)}
        >
          Add Exam
        </button>

        <Modal open={isAddExamOpen}>
          <AddExam
            exams={exams}
            setExams={setExams}
            closeModal={() => setIsAddExamOpen(false)}
          />
        </Modal>
        <Modal open={isEditExamOpen}>
          <EditAgenda
            exams={exams}
            setExams={setExams}
            id={id}
            closeModal={() => setIsEditExamOpen(false)}
          />
        </Modal>
      </div>

      <Calendar
        localizer={localizer}
        //events={events}
        events={exams}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      <ExamList
        exams={exams}
        setId={setId}
        setIsEditExamOpen={setIsEditExamOpen}
        deleteExam={deleteExam}
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

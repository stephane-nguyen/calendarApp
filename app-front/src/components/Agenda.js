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
  const [allExams, setAllExams] = useState([]);

  const [id, setId] = useState(null);

  //MODAL
  const [isAddExamOpen, setIsAddExamOpen] = useState(false);
  const [isEditExamOpen, setIsEditExamOpen] = useState(false);

  useEffect(() => {
    const getAllExams = async () => {
      try {
        const response = await api.get("/exam");
        setAllExams(response.data);
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

  /**
   * DB has different attributes for Calendar events property.
   * We create here a new array with the right attributes
   */
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const getSubjectNameFromSubjectId = async (id) => {
      const res = await api.get(`/examSubject/${id}`);
      return res.data;
    };

    const createCalendarEvents = async () => {
      const promises = allExams.map(async (exam) => {
        const subjectName = await getSubjectNameFromSubjectId(
          exam.subjects_id_subjects
        );
        return {
          title: subjectName,
          start: new Date(exam.startDate),
          end: new Date(exam.endDate),
        };
      });

      const events = await Promise.all(promises);
      setCalendarEvents(events);
    };

    createCalendarEvents();
  }, [allExams]);

  const deleteExam = async (id) => {
    try {
      await api.delete(`exam/${id}`);
      setAllExams(allExams.filter((exam) => exam.id !== id));
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
            allExams={allExams}
            setExams={setAllExams}
            closeModal={() => setIsAddExamOpen(false)}
          />
        </Modal>
        <Modal open={isEditExamOpen}>
          <EditAgenda
            exams={allExams}
            setExams={setAllExams}
            id={id}
            closeModal={() => setIsEditExamOpen(false)}
          />
        </Modal>
      </div>

      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      <ExamList
        exams={allExams}
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

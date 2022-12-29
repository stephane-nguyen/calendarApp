import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const locales = { "en-US": require("date-fns/locale/en-US") };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "maths",
    allDay: true,
    start: new Date(),
    end: new Date(2022, 12, 0),
  },
  {
    title: "histoire",
    start: new Date(2022, 12, 0),
    end: new Date(2022, 12, 0),
  },
  {
    title: "français",
    start: new Date(2022, 12, 0),
    end: new Date(2022, 12, 0),
  },
];

const CalendarComponent = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <>
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start: start })}
        />
        <DatePicker
          placeholderText="End date"
          selected={newEvent.start}
          onChange={(end) => setNewEvent({ ...newEvent, end: end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </>
  );
};

export default CalendarComponent;

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  /* CRUD */

  const addEvent = (e) => {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      <br /> <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h3 className="card-header text-center">Add new event</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Add title"
                      name="title"
                      className="form-control"
                      value={newEvent.title}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      placeholderText="Start date"
                      selected={newEvent.start}
                      onChange={(start) =>
                        setNewEvent({ ...newEvent, start: start })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker
                      placeholderText="End date"
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={newEvent.end}
                      onChange={(end) => setNewEvent({ ...newEvent, end: end })}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-block"
                    onClick={(e) => addEvent(e)}
                  >
                    Add event
                  </button>

                  <button className="btn btn-danger btn-block">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-inline">
        <form>
          <input
            type="text"
            class="form-control mr-2"
            placeholder="Add title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
        </form>
      </div>
      <div className="container mt-1">
        <h2 className="text-center">List of events</h2>
        <Link to="/add-user" className="btn btn-primary mb-2">
          {" "}
          Add Event
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEvents.map((user) => (
              <tr key={user.idUser}>
                <td>{user.title}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>
                  <Link to={`/user/${user.idUser}`}>
                    <button className="btn btn-primary">
                      <i className="fas fa-edit" /> Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CalendarComponent;

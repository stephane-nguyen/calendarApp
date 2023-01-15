import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SubjectList from "../components/list/SubjectList";

const subjects = [
  { idSubject: 1, nameSubject: "Math" },
  { idSubject: 2, nameSubject: "Science" },
  { idSubject: 3, nameSubject: "History" },
];

const setId = jest.fn();
const setIsAddOpen = jest.fn();
const setIsEditOpen = jest.fn();
const deleteSubject = jest.fn();

test("renders the SubjectList component", () => {
  render(
    <SubjectList
      subjects={subjects}
      setId={setId}
      setIsAddOpen={setIsAddOpen}
      setIsEditOpen={setIsEditOpen}
      deleteSubject={deleteSubject}
    />
  );

  expect(screen.getByText("List of Subjects")).toBeInTheDocument();
  expect(screen.getByText("Add Subject")).toBeInTheDocument();
});

test("opens the Add Subject modal when the Add Subject button is clicked", () => {
  render(
    <SubjectList
      subjects={subjects}
      setId={setId}
      setIsAddOpen={setIsAddOpen}
      setIsEditOpen={setIsEditOpen}
      deleteSubject={deleteSubject}
    />
  );

  const addSubjectButton = screen.getByText("Add Subject");
  fireEvent.click(addSubjectButton);

  expect(setIsAddOpen).toHaveBeenCalledWith(true);
});

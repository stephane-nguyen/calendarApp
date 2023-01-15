import { render } from "@testing-library/react";
import AddSubject from "../components/add/AddSubject";

const subjects = [
  { idSubject: 1, nameSubject: "Math" },
  { idSubject: 2, nameSubject: "Science" },
  { idSubject: 3, nameSubject: "History" },
];

const setIsAddOpen = jest.fn();
const setSubjects = jest.fn();

describe("click the submit button for subject's add modal", () => {
  it("should render form correctly", () => {
    render(
      <AddSubject
        subjects={subjects}
        setSubjects={setSubjects}
        closeModal={() => {
          setIsAddOpen(false);
        }}
      />
    );
  });
});

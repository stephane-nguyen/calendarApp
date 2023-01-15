import React from "react";

const SpecialityList = ({
  specialities,
  setId,
  setIsAddOpen,
  setIsEditOpen,
  deleteSpeciality,
}) => {
  return (
    <div className="container">
      <h2 className="text-center">List of Speciality</h2>
      <button
        className="btn btn-primary mb-2"
        onClick={() => setIsAddOpen(true)}
      >
        Add Speciality
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Speciality Id</th>
            <th>Speciality Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {specialities.map((speciality) => (
            <tr key={speciality.idSpeciality}>
              <td>{speciality.idSpeciality}</td>
              <td>{speciality.nameSpeciality}</td>
              <td>
                {/* action buttons */}
                <ul className="list-inline m-0">
                  <li className="list-inline-item">
                    <button
                      onClick={() => {
                        setId(speciality.idSpeciality);
                        setIsEditOpen(true);
                      }}
                      className="btn btn-success btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => deleteSpeciality(speciality.idSpeciality)}
                      className="btn btn-danger btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecialityList;

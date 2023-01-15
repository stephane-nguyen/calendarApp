import React, { useState } from "react";
import api from "../../api/baseURL";

const AddSpeciality = ({ specialities, setSpecialities, closeModal }) => {
  const [nameSpeciality, setNameSpeciality] = useState("");

  const addSpeciality = async (e, closeModal) => {
    e.preventDefault();
    try {
      const response = await api.post("/speciality", { nameSpeciality });
      console.log(response);
      const allSpecialities = [...specialities, response.data];
      setSpecialities(allSpecialities);
      setNameSpeciality("");
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
            <h3 className="card-header text-center">New speciality</h3>
            <div className="card-body">
              <form onSubmit={(e) => addSpeciality(e, closeModal)}>
                <div className="form-group">
                  <label htmlFor="nameSpeciality" className="form-label">
                    Speciality Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your speciality"
                    name="nameSpeciality"
                    className="form-control"
                    value={nameSpeciality}
                    onChange={(e) => setNameSpeciality(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Add
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

export default AddSpeciality;

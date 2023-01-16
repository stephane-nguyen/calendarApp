import React, { useState, useEffect } from "react";
import api from "../../api/baseURL";

const EditSpeciality = ({ specialities, setSpecialities, id, closeModal }) => {
  const [nameSpeciality, setNameSpeciality] = useState("");

  /* Display data about the speciality selected */
  useEffect(() => {
    const fetchSpecialityNameById = async () => {
      const speciality = await getSpecialityById(id);
      setNameSpeciality(speciality.nameSpeciality);
    };
    fetchSpecialityNameById();
  }, [id]);

  const getSpecialityById = async (id) => {
    try {
      const res = await api.get(`/speciality/${id}`);
      return res.data;
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  const editSpeciality = async (e, closeModal) => {
    e.preventDefault();
    try {
      const response = await api.put(`/speciality/${id}`, { nameSpeciality });
      setSpecialities(
        specialities.map((speciality) =>
          //if not, we keep the speciality as it is because we didnt update it
          speciality.idSpeciality === id ? { ...response.data } : speciality
        )
      );
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
            <h3 className="card-header text-center">Edit speciality</h3>
            <div className="card-body">
              <form onSubmit={(e) => editSpeciality(e, closeModal)}>
                <div className="form-group">
                  <label htmlFor="nameSpeciality" className="form-label">
                    Speciality Name
                  </label>
                  <input
                    type="text"
                    placeholder="Modify your speciality name"
                    name="nameSpeciality"
                    className="form-control"
                    value={nameSpeciality}
                    onChange={(e) => setNameSpeciality(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Edit
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

export default EditSpeciality;

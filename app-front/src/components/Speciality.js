import React, { useState, useEffect } from "react";
import api from "../api/baseURL";

import AddSpeciality from "./add/AddSpeciality";
import EditSpeciality from "./edit/EditSpeciality";
import SpecialityList from "./list/SpecialityList";
import Modal from "./Modal";

const Speciality = () => {
  const [specialities, setSpecialities] = useState([]);
  const [id, setId] = useState(null);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const getAllSpecialities = async () => {
      try {
        const response = await api.get("/speciality");
        setSpecialities(response.data);
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
    getAllSpecialities();
  }, [specialities]);

  const deleteSpeciality = async (id) => {
    try {
      await api.delete(`speciality/${id}`);
      setSpecialities(specialities.filter((speciality) => speciality.idSpeciality !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
      <Modal open={isAddOpen}>
        <AddSpeciality
          specialities={specialities}
          setSpecialities={setSpecialities}
          closeModal={() => {
            setIsAddOpen(false);
          }}
        />
      </Modal>

      <Modal open={isEditOpen}>
        <EditSpeciality
          specialities={specialities}
          setSpecialities={setSpecialities}
          id={id}
          closeModal={() => setIsEditOpen(false)}
        />
      </Modal>

      <SpecialityList
        specialities={specialities}
        setId={setId}
        setIsAddOpen={setIsAddOpen}
        setIsEditOpen={setIsEditOpen}
        deleteSpeciality={deleteSpeciality}
      />
    </>
  );
};

export default Speciality;

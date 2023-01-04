import React from "react";

function editUser({
  users,
  editnameuser,
  setEditnameuser,
  edituser,
  setIsOpen,
}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">Edit Student</h3>
            <div className="card-body">
              <form onSubmit={edituser}>
                <div className="form-group">
                  <label htmlFor="nameuser" className="form-label">
                    Student Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name user"
                    name="nameuser"
                    className="form-control"
                    value={editnameuser.nameuser}
                    onChange={(e) =>
                      setEditnameuser({
                        ...editnameuser,
                        nameuser: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  // onClick={setIsOpen(false)}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => setIsOpen(false)}
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
}

export default editUser;

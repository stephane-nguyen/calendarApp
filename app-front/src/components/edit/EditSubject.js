const EditSubject = ({
  subjects,
  editnameSubject,
  setEditnameSubject,
  editSubject,
  setIsOpen,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">Edit subject</h3>
            <div className="card-body">
              <form onSubmit={editSubject}>
                <div className="form-group">
                  <label htmlFor="nameSubject" className="form-label">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name subject"
                    name="nameSubject"
                    className="form-control"
                    value={editnameSubject.nameSubject}
                    onChange={(e) =>
                      setEditnameSubject({
                        ...editnameSubject,
                        nameSubject: e.target.value,
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
};

export default EditSubject;

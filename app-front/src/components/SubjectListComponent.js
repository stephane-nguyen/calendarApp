import React, { useState,useEffect } from 'react'
import SubjectService from '../services/SubjectService';


const SubjectListComponent = () => {

	const [subjects, setSubjects] = useState([]);

	useEffect(() => {
	  SubjectService.getAllUsers().then((response) => {
		setSubjects(response.data)
	  }).catch(err => console.log(err))
  }, []);
  
  return (
    <div className="container">
		<h2 className="text-center">List of Subjects</h2>
		<table className='table table-bordered table-striped'>
			<thead>
				<tr>
					<th>Subject Name</th>
				</tr>

				<tbody>
          { subjects.map(subject => 
            <tr key = {subject.idSubject}>
           
              <td>{subject.nameSubject}</td>
           
            </tr>
         )}
      </tbody>
			</thead>
		</table>
    </div>
  )
}

export default SubjectListComponent

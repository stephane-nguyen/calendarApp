package com.example.demo.model.doublekey;

import java.io.Serializable;
import java.util.Objects;

public class SpecialityHasSubjectsId implements Serializable {
	

	private Integer specialityIdSpeciality;
	private Integer subjectsIdSubject;
	
	
	public SpecialityHasSubjectsId() {
		super();
	}


	public SpecialityHasSubjectsId(Integer specialityIdSpeciality, Integer subjectsIdSubject) {
		this.specialityIdSpeciality = specialityIdSpeciality;
		this.subjectsIdSubject = subjectsIdSubject;
	}
	
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SpecialityHasSubjectsId specialityIdSpeciality = (SpecialityHasSubjectsId) o;
        return specialityIdSpeciality.equals(specialityIdSpeciality.specialityIdSpeciality) &&
        		subjectsIdSubject.equals(specialityIdSpeciality.subjectsIdSubject);
    }	

    @Override
    public int hashCode() {
        return Objects.hash(specialityIdSpeciality, subjectsIdSubject);
    }
	

}

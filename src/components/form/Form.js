import React from 'react';
import {PersonalDetailForm} from './PersonalDetailForm';
import {ProfessionalSummaryForm} from './ProfessionalSummaryForm';
import {EmploymentHistoryForm} from './EmploymentHistoryForm'

export const Form = () => {
    return (
        <div className="container">
          <PersonalDetailForm />  
          <ProfessionalSummaryForm />
          <EmploymentHistoryForm />
        </div>
    )
}

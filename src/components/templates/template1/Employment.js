import React from 'react';
import {Project} from './Project';

export const Employment = ({data}) => {
    const {company, from, jobTitle, projects, to } = data;
    return (
        <div className="mt-3">
            <h4>
                {jobTitle} at {company}
            </h4>
            <p className="orange-text">{from} to {to}</p>
            <div className="pl-3">
                {
                    projects.map((x, idx) => <Project key={idx} data={x} />)
                }
            </div>
        </div>
    )
}

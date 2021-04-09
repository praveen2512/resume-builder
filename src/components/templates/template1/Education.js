import React from 'react'

export const Education = ({data}) => {

    const {degree, institution, percentage, yearOfPassing} = data;

    return (
        <>
            <h4 className="mt-2 mb-1">
                {institution}
            </h4>
            <p className="orange-text">{degree}</p>
            <p className="orange-text">{yearOfPassing} - {percentage}%</p>
        </>
    )
}

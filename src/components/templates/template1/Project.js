import React from 'react'
import { Fragment } from 'react';

export const Project = ({data}) => {

    const {description, descriptionList, duration, role, technologiesUsed, title, industry, erpSystems } = data;

    return (
        <div className="mt-3">

            <ul>
                <li>
                    <h5>{title}</h5>
                </li>
            </ul>
            <div className="ml-3 my-1">
                <ul className="circle-list">
                    <li><p><strong>Role : </strong>{role}</p></li>
                    <li><p><strong>Description : </strong>{description}</p></li>
                    <li><p><strong>Technologies used : </strong>{technologiesUsed}</p></li>
                    <li><p><strong>Duration : </strong>{duration}</p></li>


                    {/* <li><p><strong>Industry : </strong>{industry}</p></li>
                    <li><p><strong>ERP System : </strong>{erpSystems}</p></li>
                    <li><p><strong>Project Utilities : </strong>{technologiesUsed}</p></li>
                    
                    {
                        descriptionList && descriptionList.length > 0 &&
                        <Fragment>
                            <li><p><strong>Description : </strong></p>
                            <ul className="ml-5">
                                {descriptionList.map((desc) => (
                                    <li>
                                        <p>{desc}</p>
                                    </li>
                                ))}
                                </ul>
                            </li>
                        </Fragment> 
                    } */}
                </ul>
                
                {/* <p>Role : {role}</p>
                <p>Description : {description}</p>
                <p>Technologies used : {technologiesUsed}</p>
                <p>Duration : {duration}</p> */}

                {/* <div className="inline-block">
                    <h5>Role : </h5><p>To develop UI and APITo develop UI and API To develop UI and API To develop UI and API To develop UI and API</p>
                </div>
                <div className="inline-block">
                    <h5>Description : </h5><p>To develop UI and API</p>
                </div>
                <div className="inline-block">
                    <h5>Technologies used : </h5><p>JSF</p>
                </div>
                <div className="inline-block">
                    <h5>Duration : </h5><p>3 Months</p>
                </div> */}
            </div>
        </div>
    )
}

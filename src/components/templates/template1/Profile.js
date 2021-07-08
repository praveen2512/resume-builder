import React, { Fragment } from "react";
import {
  BusinessCenterRounded,
  LibraryBooksRounded,
  SchoolRounded,
  WorkRounded,
} from "@material-ui/icons";
import { Card, CardContent, Grid } from "@material-ui/core";
import { Employment } from "./Employment";
import { Education } from "./Education";
// import { profile } from "../../../data/data";

export const Profile = ({profile}) => {
  const {
    education,
    employmentHistory,
    experiences,
    professionalSummary,
  } = profile;

  return (
    <Grid item sm={6}>
      {professionalSummary && professionalSummary.length > 0 && (
        <div className="prof-summary">
          {/* <CardContent> */}
          <Fragment>
            <div className="section-header">
              <BusinessCenterRounded
                className="custom-icon"
                fontSize="medium"
              />
              <h3>Professional Summary</h3>
            </div>
            <ul className="custom-list">
              {professionalSummary.map((x, idx) => (
                <li key={idx}>
                  <p>{x}</p>
                </li>
              ))}
            </ul>
          </Fragment>
          {/* </CardContent> */}
        </div>
      )}

      {employmentHistory && employmentHistory.length > 0 && (
        <div className="emp-history mt-4">
          {/* <CardContent> */}
          <Fragment>
            <div className="section-header">
              <WorkRounded className="custom-icon" fontSize="medium" />
              <h3>Employment History</h3>
            </div>

            {employmentHistory.map((x, idx) => (
              <Employment key={idx} data={x} />
            ))}
          </Fragment>
          {/* </CardContent> */}
        </div>
      )}

      {experiences && experiences.length > 0 && (
        <div className="experience mt-4">
          {/* <CardContent> */}
          <div className="section-header">
            <LibraryBooksRounded className="custom-icon" fontSize="medium" />
            <h3>Experiences</h3>
          </div>
          <ul className="custom-list">
            {experiences.map((x, idx) => (
              <li key={idx}>
                <p>{x}</p>
              </li>
            ))}
          </ul>
          {/* </CardContent> */}
        </div>
      )}

      {education && education.length > 0 && (
        <div className="education mt-4">
          {/* <CardContent> */}
          <div className="section-header">
            <SchoolRounded className="custom-icon" fontSize="medium" />
            <h3>Education</h3>
          </div>
          {education.map((x, idx) => (
            <Education key={idx} data={x} />
          ))}
          {/* </CardContent> */}
        </div>
      )}
    </Grid>
  );
};

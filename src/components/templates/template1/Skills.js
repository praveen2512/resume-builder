import React from 'react';
import { ClearAllRounded, LanguageRounded} from '@material-ui/icons';
import { Card, CardContent, Grid, LinearProgress } from '@material-ui/core';
// import {profile} from '../../../data/data';

export const Skills = ({profile}) => {

    const {languages, skills} = profile;

    return (
      <Grid item sm={3}>
        <div className="skills">
          {/* <CardContent> */}
            <div className="section-header">
              <ClearAllRounded className="custom-icon" fontSize="medium" />
              <h3>Skills</h3>
            </div>

            {skills.map((x, idx) => (
              <div className="skill">
                <p>{x.skill}</p>
                <LinearProgress
                  value={x.rating * 20}
                  variant="determinate"
                  className="skill-level"
                />
              </div>
            ))}
          {/* </CardContent> */}
        </div>

        <div className="languages">
          {/* <CardContent> */}
            <div className="section-header">
              <LanguageRounded className="custom-icon" fontSize="medium" />
              <h3>Languages</h3>
            </div>
            {languages.map((x, idx) => (
              <div key={idx} className="skill">
                <p>{x.language}</p>
                <LinearProgress
                  value={x.rating * 20}
                  variant="determinate"
                  className="skill-level"
                />
              </div>
            ))}
          {/* </CardContent> */}
        </div>
      </Grid>
    );
}

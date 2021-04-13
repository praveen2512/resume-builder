import './template.css';
import { useState, useEffect } from "react";
import { Grid } from '@material-ui/core';
import {Skills} from './Skills';
import {Profile} from './Profile';
import {Header} from './Header'
import {UploadData} from '../../form/UploadData';

import { profile } from "../../../data/data";

function Template() {

  const [profileData, setProfileData] = useState({});
  const [displayResume, setDisplayResume] = useState(false);

  useEffect(()=> {
    console.log("inside effect");
    console.log(`${displayResume} : ${profileData}`)
  }, [displayResume]);

  //console.log(`profileData is ${JSON.parse(JSON.stringify(profileData))}`);

  return (
    <div className="container">
      {!displayResume && <UploadData setProfileData={setProfileData} setDisplayResume={setDisplayResume}/>}
      {
        (displayResume) && (
          <>
            <Grid container>
              <Header profile={profileData}/>
            </Grid>      
            <Grid container direction="row" spacing={3} className="mt-3">
              <Profile profile={profileData}/>
              <Skills profile={profileData}/>
            </Grid>
          </>
        )
      }
    </div>
  );
}

export default Template;

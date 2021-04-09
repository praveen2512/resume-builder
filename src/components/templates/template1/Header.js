import React from 'react';
import {EmailRounded, PhoneRounded, SendRounded} from '@material-ui/icons';
import { Card, CardContent, Grid } from '@material-ui/core';
import {profile} from '../../../data/data';

export const Header = () => {

    const {fullName, address, email, phone} = profile.personalInfo

    return (
      <Grid item sm={12}>
        <div>
          {/* <CardContent> */}
            <h1 className="name">{fullName}</h1>
            <div className="section-header">
              <SendRounded className="custom-icon" fontSize="small" />
              <p>{address}</p>
            </div>
            <div className="section-header">
              <EmailRounded className="custom-icon" fontSize="small" />
              <p>{email}</p>
            </div>
            <div className="section-header">
              <PhoneRounded className="custom-icon" fontSize="small" />
              <p>{phone}</p>
            </div>
          {/* </CardContent> */}
        </div>
      </Grid>
    );
}

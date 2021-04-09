import './template.css';
import { Grid } from '@material-ui/core';
import {Skills} from './Skills';
import {Profile} from './Profile';
import {Header} from './Header'

function Template() {
  return (
    <div className="container">
      <Grid container>
        <Header />
      </Grid>      
      <Grid container direction="row" spacing={3} className="mt-3">
        <Profile />
        <Skills />
      </Grid>
    </div>
  );
}

export default Template;

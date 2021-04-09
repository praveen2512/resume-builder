import React from 'react';
import {Card, CardContent, CardHeader, Grid, FormControl, TextField, Typography } from "@material-ui/core";

export const PersonalDetailForm = () => {
    return (
            <Card>
                <CardContent>
                    <CardHeader title="Personal Details" />
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} md={3}>
                            <TextField label="Full Name" placeholder="Full Name"/>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <TextField label="Address" placeholder="Address"/>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <TextField label="Email Address" placeholder="Email Address"/>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <TextField label="Phone Number" placeholder="Phone Number"/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
    )
}

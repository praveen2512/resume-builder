import React from 'react';
import {Card, CardContent, CardHeader, Grid, FormControl, TextField, Typography } from "@material-ui/core";

export const EmploymentHistoryForm = () => {
    return (
        <Card>
            <CardContent>
                <CardHeader title="Employment History" />
                <Grid container spacing={1}>
                    <Grid xs={12}>
                        <TextField multiline rows={2} placeholder="Tell about yourself"/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

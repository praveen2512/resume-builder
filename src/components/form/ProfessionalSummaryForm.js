import React from 'react';
import {Card, CardContent, CardHeader, Grid, FormControl, TextField, Typography } from "@material-ui/core";

export const ProfessionalSummaryForm = () => {
    return (
        <Card>
            <CardContent>
                <CardHeader title="Professional Summary" />
                <Grid container spacing={1}>
                    <Grid xs={12}>
                        <TextField multiline rows={2} placeholder="Tell about yourself"/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

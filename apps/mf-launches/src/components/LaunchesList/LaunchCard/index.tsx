import { CardContent, Card, CardActions, Typography } from '@mui/material';
import React from 'react';
import { ILaunchProperties } from 'src/services/launches.service';

type CardProps = {
  launch: ILaunchProperties;
};
const LaunchCard = ({ launch }: CardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color='text.primary' gutterBottom>
          Name: {launch.rocket?.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Rocket ID: {launch.rocketId}
          <br />
          Launch Code: {launch.launchCode}
          <br />
          Data: {launch.date}
          <br />
          {launch.success ? 'Lançamento bem sucedido' : 'Falha no lançamento'}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default LaunchCard;

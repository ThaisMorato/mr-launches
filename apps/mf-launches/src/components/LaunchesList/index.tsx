import React from 'react';
import { ILaunchProperties } from 'src/services/launches.service';
import LaunchCard from './LaunchCard';
import Card from './LaunchCard';
import { Container } from './style';

type LaunchesListProps = {
  launches: ILaunchProperties[];
};
const LaunchesList = ({ launches }: LaunchesListProps) => {
  return (
    <Container>
      {launches?.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </Container>
  );
};

export default LaunchesList;

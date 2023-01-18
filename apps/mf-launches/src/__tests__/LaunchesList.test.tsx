import { render, screen } from '@testing-library/react';
import LaunchesList from '@/components/LaunchesList';
import { ILaunchProperties } from 'src/services/launches.service';

const launchesMock: ILaunchProperties[] = [
    {
      date: '2022-04-22',
      id: 1,
      rocketId: 1,
      rocket: { id: 1, name: 'SpaceX' },
      success: true,
      launchCode: '123456',
    },
    {
      date: '2022-05-10',
      id: 2,
      rocketId: 2,
      rocket: {
        id: 2,
        name: 'SpaceX2',
      },
      success: true,
      launchCode: '123456',
    },
];

test('renders LaunchesList', () => {
  render(<LaunchesList launches={launchesMock} />);
  const containerEl = screen.getByTestId(`container`);
  expect(containerEl).toBeInTheDocument();
  expect(containerEl.childNodes.length).toBe(2)
});

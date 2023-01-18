import LaunchesService from 'src/services/launches.service';

// this is an integration test because it relies on data fetched from the API (if the API is not running,
// this test will fail). It would be interesting if we used two separate scripts to run the unit tests and
// to run the integration tests, such as 'npm run test:unit' and 'npm run test:integration'
test('[integration] launches fetched should be ordered', async () => {
  expect.assertions(1)
    try {
      const launches = await LaunchesService.getLaunches();
      const orderedLaunches = [...launches].sort((a, b) => new Date(a.date || "") > new Date(b.date || "") ? -1 : 1);
      expect(launches).toEqual(orderedLaunches);
    }
    catch(err) {}
  })
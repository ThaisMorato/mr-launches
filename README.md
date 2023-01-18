# Desired Technologies

- Typescript
- Javascript
- React
- NodeJS
- NoSQL
- Express
- TypeORM

# Backend/Frontend Launches

Create a frontend UI that displays a list of all rockets launches.
You can fetch the launch data at the endpoint that you will create in the backend project.

- Backend: The tasks are specified in the code. Search for #TASK-BACKEND- 0, 1, 2, 3, and 4. You can go in any order to solve the problems.
  > Tasks 0, 1, 2 and 3 were solved during the live code test. Task 4 was solved later in a separate commit.
- Frontend: The tasks are specified in the code. Search for #TASK-FRONTEND - 00, 01, 02, 03, and 04. You can go in any order to solve the problems.
  > Tasks 0, 1, 2 and 3 were solved during the live code test. Task 4 was solved later in a separate commit.
- Bonus: add a date filter to allow users to select a date and only show rocketss launched after that date
  > - Inside LaunchesList component, use React.useStatus to store dateInput, initiated as an empty string, and update it everytime the date input changes.
  > - Use a second React.useStatus to store filteredLaunches, which would be initiated with the value [...launches] and updated everytime a button 'Filtrar' is pressed. The button should call setFilteredLaunches(launches.filter(launch => launch.date > dateInput)). If the date is an empty string, call setFilteredLaunches([...launches])
- Bonus: add a checkbox to allow users to select only successful launches
  > Would be done in a similar way as described in the previous question.
  >
  > - Inside LaunchesList component, store a boolean successfulOnly initiated as false and updated everytime the input changes.
  > - The 'Filtrar' button should now do a cascade of the existent filters, such as:
  >
  > ```
  >   let filteredData = [...launches]
  >
  >   if(dateInput) {
  >     filteredData = filteredData.filter(d => d.date > dateInput)
  >   }
  >
  >   if(successfulOnly) {
  >     filteredData = filteredData.filter(d => d.successful)
  >   }
  >
  >   setFilteredLaunches(filteredData)
  > ```
- Bonus(advanced): Solution to demonstrate the endpoints contracts
  > Swagger could be used in order to display the endpoints contracts to whomever is trying to use the API
- Bonus(advanced): demonstrate a e2e test
- Bonus(advanced): Create a unit test

### In README you can add a description of things that you won't have a chance to finish like:

- How would you think of documentation
  > - Use Swagger to document the endpoints
  > - Add a README.md to mf-launches and ms-launches individually containing useful information about the front and backend respectively
  > - Write clean code, with meaningful names for variables and methods, and add comments to explain functionalities as needed. In that way, the code itself would be the documentation, and the README.md should indicate a starting point for understanding the code.
- What about CI / CD setup
  > Automate using github (for example, when someone pushes their changes to the 'main' branch the production pipeline would run automatically, or when someone pushes into 'staging' a staging pipeline would run). It is a good idea to use code review and protected branches in order to do that.
- How could the directory structure evolve if this was to become a more complex project (Models of Architectures)
  > - In frontend, the file structure could be based in Atomic Design, such as:
  >
  > ```
  >     - components
  >         - atoms
  >         - molecules
  >         - organisms
  >         - templates
  >         - pages
  > ```
  >
  > - Still in frontend, the library 'redux' could be used to handle the state of the application, and the library '@reduxjs/toolkit' could also be used because it simplifies the use of redux and also simplifies the communication with an API, making it easier to update the DOM when there's a pending requests or an error.
  > - In backend, an abstract class BaseController and BaseService could be built in order to reduce the amount of duplicated logic between two different controllers and two different services.
- Any other best practices you would want to add
  > - Use a stronger lint conference in order to keep the code organised and easy to read and to maintain (for example, don't allow variables typed as 'any')
  > - Separate the scripts that run different types of tests, such as 'npm run test:unit', 'npm run test:integration', 'npm run test:e2e'
  > - Use git flow and code review in order to organize the branches and commits to the repository.

import { LaunchesRepository } from '@infrastructure/repository/launches.repository'
import { LaunchesDTO } from '@shared/dtos/launches.dto'
import ValidationError from '@shared/errors/validation.error'
import express from 'express'
import LaunchesController from './launches.controller'
import LaunchesService from './launches.service'

jest.mock('@infrastructure/repository/launches.repository')
const LaunchesRepositoryMock =
  LaunchesRepository as jest.Mock<LaunchesRepository>
const launchesRepositoryMock = new LaunchesRepositoryMock()

const router = express.Router()

test('should add a new launch', async () => {
    const launchToCreate: LaunchesDTO = new LaunchesDTO(
        1,
        { name: 'Appolo', id: 1 },
        1,
        new Date(),
        true,
        'af454482-8e0f-4d2f-875b-2b1265b001f6'
    )
    const responsePromise = new Promise<LaunchesDTO>((resolve) => {
        return resolve(launchToCreate)
    })

    jest
        .spyOn(launchesRepositoryMock, 'save')
        .mockReturnValueOnce(responsePromise)
    const launch = await new LaunchesController(
        router,
        new LaunchesService(launchesRepositoryMock)
    ).saveLaunch(launchToCreate)

    expect(launch).toBeDefined()
})

test('should try to add a new launch and return a validation error', async () => {
    const launchToCreate: LaunchesDTO = {
        id: 1,
        rocket: null,
        rocketId: 0,
        date: null,
        success: true,
        launchCode: null,
    }
    const responsePromise = new Promise<LaunchesDTO>((resolve) => {
        return resolve(launchToCreate)
    })

    jest
        .spyOn(launchesRepositoryMock, 'save')
        .mockReturnValueOnce(responsePromise)
    let errorTest = null
    try {
        await new LaunchesController(
            router,
            new LaunchesService(launchesRepositoryMock)
        ).saveLaunch(launchToCreate)
    } catch (error) {
        errorTest = error
    }
    expect(errorTest).toBeInstanceOf(ValidationError)
})

/*
    #TASK-BACKEND-4 (TESTS/JEST)- WRITE A TEST TO VALIDATE ALL THE FLOW IMPLEMENTED.
*/
test('should fetch launches in order', async () => {
    const launchesController = await new LaunchesController(
        router,
        new LaunchesService(launchesRepositoryMock)
    )

    const baseLaunchObj = {
        rocket: { id: 1, name: "RocketName" },
        rocketId: 1,
        success: true,
        launchCode: '123456',
    };
    const launches = new Promise<LaunchesDTO[]>((resolve) => resolve(
        [
            { ...baseLaunchObj, id: 1, date: new Date("2021-10-10") },
            { ...baseLaunchObj, id: 2, date: new Date("2022-10-10") },
            { ...baseLaunchObj, id: 3, date: new Date("2023-10-10") },
        ]
    ));

    jest
    .spyOn(launchesRepositoryMock, 'findByName')
    .mockReturnValueOnce(launches)

    const launchesFetched = await launchesController.getLauchesByRocket('')
    expect(launchesFetched.length).toBe(3);
    expect(launchesFetched[0].date.getFullYear()).toBe(2023)
    expect(launchesFetched[1].date.getFullYear()).toBe(2022)
    expect(launchesFetched[2].date.getFullYear()).toBe(2021)
})

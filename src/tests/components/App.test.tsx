import React from 'react'
import { mount } from 'enzyme'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

import { fakeActivities } from '../fixtures/seed'

import App from '../../app/layout/App'

afterAll(() => {
  jest.restoreAllMocks()
})

test('Should render App correctly when activities are fetched successfully', async () => {
  const fakeAxiosResponse = { data: fakeActivities }
  jest.spyOn(axios, 'get').mockResolvedValueOnce(fakeAxiosResponse)

  const wrapper = mount(<App />)

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  })

  wrapper.update()

  expect(wrapper).toMatchSnapshot()
})

test('Should render App correctly with empty activity list', async () => {
  const fakeAxiosResponse = { data: [] }
  jest.spyOn(axios, 'get').mockResolvedValueOnce(fakeAxiosResponse)

  const wrapper = mount(<App />)

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  })

  wrapper.update()

  expect(wrapper).toMatchSnapshot()
})
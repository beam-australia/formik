import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { Formik, Form } from 'formik'
import FormResponseWrapped, { FormResponse } from './'

describe('<FormResponse />', () => {
  let mount

  beforeEach(() => {
    mount = createMount()
  })

  it('fully renders without crashing', () => {
    mount(
      <Formik>
        <Form>
          <FormResponseWrapped />
        </Form>
      </Formik>
    )
  })

  it('does not render with no status.message', () => {
    const wrapper = mount(
      <FormResponse
        classes={{}}
        formik={{
          status: {
            message: undefined,
            success: undefined
          }
        }}
      />
    )
    expect(wrapper).toBeEmptyRender()
  })

  it('renders status.message', () => {
    const wrapper = mount(
      <FormResponse
        classes={{}}
        formik={{
          status: {
            message: 'You have mail.',
            success: undefined
          }
        }}
      />
    )
    expect(wrapper.find('Typography')).toHaveText('You have mail.')
  })

  it('can render in an error state', () => {
    const wrapper = mount(
      <FormResponse
        classes={{
          error: 'has-error'
        }}
        formik={{
          status: {
            message: 'You have no mail.',
            success: false
          }
        }}
      />
    )
    expect(wrapper).toContainMatchingElement('.has-error')
  })

  it('can render in an success state', () => {
    const wrapper = mount(
      <FormResponse
        classes={{
          success: 'has-success'
        }}
        formik={{
          status: {
            message: 'You have mail.',
            success: true
          }
        }}
      />
    )
    expect(wrapper).toContainMatchingElement('.has-success')
  })
})

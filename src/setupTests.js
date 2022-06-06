/* eslint-disable */

import '@testing-library/jest-dom'
import {configure as eConfigure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import {configure} from '@testing-library/react'

configure({testIdAttribute: 'testid'})

eConfigure({adapter: new Adapter()})

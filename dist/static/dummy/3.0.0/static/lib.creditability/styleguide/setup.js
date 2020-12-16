import axios from 'axios'
import { Grid, Slider } from '@sbol/lib.ui'

import { stubRequest } from './provider'

global.Grid = Grid
global.Slider = Slider
global.axios = axios
global.stubRequest = stubRequest

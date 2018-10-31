import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppState from './AppState'
import Container from './Container'
import StoreModel from './models/StoreModel'

const data = new AppState()
const store = new StoreModel()
// const store = {
//   type: 'container',
//   items: [
//     {
//       type: 'container',
//       items: [
//         {
//           type: 'container',
//           items: [
//           ]
//         }
//       ]
//     },
//     {
//       type: 'box',
//       color: 'orange'
//     }
//   ]
// }
let level = 0;
render(
  <AppContainer>
    <Container store={store} level={level} />
  </AppContainer>,
  document.getElementById('root')
)
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <NextApp data={data} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}

import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import '@testing-library/jest-dom/extend-expect';

test('renders learn', () => {
  render(
    <Provider store={store}>
      <App></App>
    </Provider>
  )
  expect(screen.getByText('Todos')).toBeInTheDocument()
})
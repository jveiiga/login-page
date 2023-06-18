
import { RoutesMain } from './routes'
import { AuthProvider } from './providers/AuthProvider'
import { ToastContainer } from 'react-toastify'


export const App = () => {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <RoutesMain />
      </AuthProvider>
    </>
  )
}

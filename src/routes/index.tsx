import Home from '@/pages/Home'
import { useRoutes, Link } from '@solidjs/router'

const Routes = () => {
  return useRoutes([
    {
      element: <Home />,      
      path: '/'
    },
    {
      element: 
      <div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>

        <h2>About</h2>
      </div>,      
      path: 'about'
    }
  ])
}

export default Routes
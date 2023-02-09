import React   from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Blog from './Blog';
import Single from './Single';
import Shared from './Shared';
import Create from './Create';




const App = () => {

  const  router  =  createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/"  element={<Shared />}>
        <Route index element={<Blog/>} />
        <Route  path="/:blogId"  element={<Single />}/>
        <Route path="/create" element={<Create/>} />
        </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

/**
 * 
 * 
 * fetch  fucntion
 * axios 
 * useSWR 
 * React query
 * asychronize js , async await, then catch, try catch
 * 
 */

export default App
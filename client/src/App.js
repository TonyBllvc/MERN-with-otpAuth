import { RouterProvider, createBrowserRouter, } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

/** root routes */
const router = createBrowserRouter([
  {
      path : '/',
      element : <Username></Username>
  },
  {
      path : '/register',
      element : <Register></Register>
  },
  {
      path : '/password',
      element : <Password></Password>
  },
  {
      path : '/profile',
      element : <Profile> </Profile>
  },
  {
      path : '/recovery',
      element : <Recovery></Recovery>
  },
  {
      path : '/reset',
      element : <Reset></Reset>
  },
  {
      path : '*',
      element : <PageNotFound></PageNotFound>
  },
])

export default function App() {
  return (
    <main>
    <RouterProvider router={router}></RouterProvider>
    </main>
  )
}








// import React, { useState, useEffect } from 'react';
// import { socket } from './socket';
// import  ConnectionState  from './components/ConnectionState';
// import  ConnectionManager  from './components/ConnectionManager';
// import  MyForm  from './components/MyForm';

// export default function App() {
//   const [isConnected, setIsConnected] = useState(socket.connected);
//   const [fooEvents, setFooEvents] = useState([]);

//   useEffect(() => {
//     function onConnect() {
//       setIsConnected(true);
//     }

//     function onDisconnect() {
//       setIsConnected(false);
//     }

//     function onFooEvent(value) {
//       setFooEvents(previous => [...previous, value]);
//     }

//     socket.on('connect', onConnect);
//     socket.on('disconnect', onDisconnect);
//     socket.on('foo', onFooEvent);

//     return () => {
//       socket.off('connect', onConnect);
//       socket.off('disconnect', onDisconnect);
//       socket.off('foo', onFooEvent);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <ConnectionState isConnected={ isConnected } />
//       {/* <Events events={ fooEvents } /> */}
//       <ConnectionManager />
//       <MyForm />
//     </div>
//   );
// }
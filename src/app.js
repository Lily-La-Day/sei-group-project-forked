import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/styles.scss'

import EventsIndex from './components/events/eventsIndex'
// import Login from './components/auth/Login'
// import Register from './components/auth/Register'

const App = () => {
  return (
    <BrowserRouter>
      <main>

        <Switch>
          <h1>helloo</h1>
          <Route path="/events" component={EventsIndex} />
        </Switch>
      </main>
    </BrowserRouter>


  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



{/*
  <Route path="/register" component={Register} />
  <Route path="/login" component={Login} />
  <Route path="/events" component={EventsIndex} /> */}

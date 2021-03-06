import React from 'react'
import Switch from 'react-router-dom/Switch'
import Head from './components/Head'

import DefaultLayout from './layouts/default'
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import LibraryPage from './pages/library'

class App extends React.Component {
  render = () =>
    <div>
      <Head />
      <Switch>
        <DefaultLayout component={IndexPage} path='/' exact title='Index' />
        <DefaultLayout component={AboutPage} path='/about' title='About' />
        <DefaultLayout component={LibraryPage} path='/library' title='Library' />
      </Switch>
    </div>
}

export default App

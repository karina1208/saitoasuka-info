import React, { Component, Suspense, useEffect } from 'react'
import './i18n'

import { HashRouter, Route, Link } from "react-router-dom"

import { Home } from "./components/Home"
import { Profile } from "./components/Profile"
import { Senbatsu } from "./components/Senbatsu"
import { Video } from "./components/Video"

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Suspense fallback={null}>

        <HashRouter>
          <div>

            
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/senbatsu" component={Senbatsu} />
            <Route path="/video/:id?/:no?" component={Video} />

          </div>
        </HashRouter>

      </Suspense>

    </div>
  )
}

export default App
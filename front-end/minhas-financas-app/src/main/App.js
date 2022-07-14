import React from 'react';

import Rotas from './rotas'
import Navbar from '../components/Navbar'

import 'toastr/build/toastr.min'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </>
    </div>
  );
}

export default App;

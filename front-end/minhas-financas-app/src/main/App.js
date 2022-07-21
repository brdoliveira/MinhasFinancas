import React from 'react';

import Rotas from './rotas'
import Navbar from '../components/Navbar'
import ProvedorAutenticacao from './provedorAutenticacao';

import 'toastr/build/toastr.min'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function App() {
  return (
    <div className="App">
      <ProvedorAutenticacao>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </ProvedorAutenticacao>
    </div>
  );
}

export default App;

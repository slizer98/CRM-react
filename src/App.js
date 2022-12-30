import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header.js';
import Navegacion from './components/layout/Navegacion';

import Clientes from './components/clientes/Clientes';
import Productos from './components/productos/Productos';
import Pedidos from './components/pedidos/Pedidos';

function App() {
    return (
    <Router>
        <>
            <Header />
            <div className="grid contenedor contenido-principal">
                <Navegacion />
                <main className="caja-contenido col-9">
                    <Routes>
                        <Route path="/" element={<Clientes />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/pedidos" element={<Pedidos />} />
                    </Routes>
                    
                </main>
            </div>
        </>
    </Router>
    );
}

export default App;

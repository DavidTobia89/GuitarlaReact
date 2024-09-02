
import './App.css';
import React, { useState, useEffect } from 'react';
import { db } from './data/guitarras';
import Guitarra from './components/Guitarra';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [guitarras, setGuitarras] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [guitarra, setGuitarra] = useState({});

  useEffect(() => {
    setGuitarras(db);
    setGuitarra(db[3]);

    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
      setCarrito(JSON.parse(carritoStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    const existeCarrito = carrito.findIndex((producto) => producto.id === guitarra.id);

    if (existeCarrito >= 0) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[existeCarrito].cantidad++;
      setCarrito(nuevoCarrito);
    } else {
      guitarra.cantidad = 1;
      setCarrito([...carrito, guitarra]);
    }
  };

  const decrementarCantidad = (id) => {
    const index = carrito.findIndex((producto) => producto.id === id);
    if (carrito[index].cantidad <= 1) return;

    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad--;
    setCarrito(nuevoCarrito);
  };

  const incrementarCantidad = (id) => {
    const index = carrito.findIndex((producto) => producto.id === id);
    if (carrito[index].cantidad >= 5) return;

    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad++;
    setCarrito(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <Header
        carrito={carrito}
        guitarra={guitarra}
        onDecrementarCantidad={decrementarCantidad}
        onIncrementarCantidad={incrementarCantidad}
        onAgregarCarrito={agregarCarrito}
        onEliminarProducto={eliminarProducto}
        onVaciarCarrito={vaciarCarrito}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra} onAgregarCarrito={agregarCarrito} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

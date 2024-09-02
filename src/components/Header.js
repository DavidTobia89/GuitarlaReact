import React, { useMemo } from 'react';

function Header({ carrito, guitarra, onDecrementarCantidad, onIncrementarCantidad, onAgregarCarrito, onEliminarProducto, onVaciarCarrito }) {

  // Calcula el total a pagar usando useMemo para optimizar el cálculo
  const totalPagar = useMemo(() => {
    return carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
  }, [carrito]);

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {carrito.length === 0 ? (
                  <p className="text-center m-0">El carrito está vacío</p>
                ) : (
                  <div>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {carrito.map((producto) => (
                          <tr key={producto.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${producto.imagen}.jpg`}
                                alt={`imagen guitarra ${producto.nombre}`}
                              />
                            </td>
                            <td>{producto.nombre}</td>
                            <td className="fw-bold">
                              {producto.precio}
                            </td>
                            <td className="flex align-items-start gap-4">
                              <button
                                onClick={() => onDecrementarCantidad(producto.id)}
                                type="button"
                                className="btn btn-dark"
                              >
                                -
                              </button>
                              {producto.cantidad}
                              <button
                                onClick={() => onIncrementarCantidad(producto.id)}
                                type="button"
                                className="btn btn-dark"
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() => onEliminarProducto(producto.id)}
                                className="btn btn-danger"
                                type="button"
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">Total a pagar: <span className="fw-bold">${totalPagar}</span></p>
                    <button onClick={onVaciarCarrito} className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 text-center text-md-start pt-5">
            <h1 className="display-2 fw-bold">Modelo {guitarra.nombre}</h1>
            <p className="mt-5 fs-5 text-white">{guitarra.descripcion}</p>
            <p className="text-primary fs-1 fw-black">{guitarra.precio}</p>
            <button
              onClick={() => onAgregarCarrito(guitarra)}
              type="button"
              className="btn fs-4 bg-primary text-white py-2 px-5"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>

      <img className="header-guitarra" src="/img/header_guitarra.png" alt="imagen header" />
    </header>
  );
}

export default Header;

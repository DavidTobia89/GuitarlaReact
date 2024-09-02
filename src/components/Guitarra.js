import React from 'react';

function Guitarra({ guitarra, onAgregarCarrito }) {
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${guitarra.imagen}.jpg`}
          alt={`imagen guitarra ${guitarra.nombre}`}
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{guitarra.nombre}</h3>
        <p>{guitarra.descripcion}</p>
        <p className="fw-black text-primary fs-3">${guitarra.precio}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => onAgregarCarrito(guitarra)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default Guitarra;

import React, { useState } from "react";

function Index() {
  const [isEditting, setIsEditting] = useState(false);

  const [user, setUser] = useState({
    name: "Montserrat Guadalupe Ramírez",
    carrera: "TIDSM",
    grado: "6to",
    num: "UTM22030544",
  });

 
  function handleSubmit(event) {
    event.preventDefault();
    setUser({
      name: event.target.name.value,
      carrera: event.target.carrera.value,
      grado: event.target.grado.value,
      num: event.target.num.value,
    });

    setIsEditting(false);
  }

  const handleEdit = () => {
    setIsEditting(true);
  };

  return (
    <div className="Index">
      <div class="inner-container">
        <div class="" left-container>
          <img class="user" src="usuario.jpg" alt="user" />
        </div>
        <div class="right-container">
          {isEditting ? (
            <form onSubmit={handleSubmit} >
              <label id="new-info" htmlFor="name">Nombre: &nbsp;</label>
              <input id="name" alt="Name" type="text" defaultValue={user.name} />
              <br />

              <label id="new-info" htmlFor="carrera">Carrera: &nbsp;</label>
              <input id="carrera" alt="Carrera" type="text" defaultValue={user.carrera}/>
              <br />

              <label id="new-info" htmlFor="grado">Grado: &nbsp;</label>
              <input id="grado" alt="Grado" type="text" defaultValue={user.grado}/>
              <br />

              <label id="new-info" htmlFor="num">No. de Control: &nbsp;</label>
              <input id="num" alt="Numero" type="text" defaultValue={user.num}/>
              <br />

              <button type="submit">Aceptar</button>
            </form>
          ) : (
            <>
              <p class="t">Nombre: {user.name}</p>
              <p class="t">Carrera: {user.carrera} </p>
              <p class="t">Grado: {user.grado}</p>
              <p class="t">No. de Control: {user.num}</p>
              <button onClick={handleEdit}>Editar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;

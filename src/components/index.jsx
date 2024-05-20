
function Index() {
  return (
    <div className="Index">
      <div class="inner-container">
        <div class="" left-container>
          <img class="user" src="usuario.jpg" alt="user" />
        </div>
        <div class="right-container">

        <label id="new-info">Nombre: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <br />

        <label id="new-info">Carrera: &nbsp;</label>
        <input id="carrera" alt="Carrera" type="text" />
        <br />

        <label id="new-info">Grado: &nbsp;</label>
        <input id="grado" alt="Grado" type="text" />
        <br />

        <label id="new-info">Numero de Control: &nbsp;</label>
        <input id="num" alt="Numero" type="text" />
        <br />

        <button type="submit">Enviar!</button>

          <p class="t">Nombre: Montserrat Guadalupe Ramírez</p>
          <p class="t">Carrera:TIDSM </p>
          <p class="t">Nivel: 6to</p>
          <p class="t">Numero de Control: UTM22030544</p>
        </div>
      </div>
    </div>
  );
}

export default Index;

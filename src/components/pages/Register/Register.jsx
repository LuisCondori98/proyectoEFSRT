const Register = () => {

  const register = () => {


  }

  return (
    <div>
      <form action="">
        <h2>Registro</h2>
        <input type="text" placeholder="Nombres" required/>
        <input type="text" placeholder="Apellidos" required/>
        <input type="email" placeholder="Ingrese correo" required/>
        <input type="password" placeholder="Contraseña" required/>
        <input type="submit" value="Registrar" className="btn btn-primary" onClick={register}/>
      </form>
    </div>
  )
}

export default Register
import { useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log(" Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);

    // objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    setPacientes([...pacientes, objetoPaciente]);
    // reiniciar el formulario

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-extrabold"> Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-14 "
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            {" "}
            <p> Todos los campos son obligatorios </p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nombreMascota"
            className="block text-gray-700 uppercase"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
            type="text"
            id="nombreMascota"
            name="nombreMascota"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombrePropietario"
            className="block text-gray-700 uppercase"
          >
            Nombre del Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
            type="text"
            id="nombrePropietario"
            name="nombrePropietario"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
            type="date"
            id="alta"
            name="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;

// arrow function
// import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // useEffect(() => {
  //   if (pacientes.length > 0) {
  //     console.log("nuevo paciente");
  //   }
  // }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <div className="xs:mb-10">
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll mb-5">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

// PropTypes for ListadoPacientes component
ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired, // Array of patients (required)
  setPaciente: PropTypes.func.isRequired, // Function to set patient data (required)
  eliminarPaciente: PropTypes.func.isRequired, // Function to delete a patient (required)
};

export default ListadoPacientes;

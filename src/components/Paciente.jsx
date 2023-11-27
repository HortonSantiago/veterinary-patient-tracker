const Paciente = () => {
  return (
    <div>
      <div className="mx-3 mt-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase ">
          Nombre :<span className="font-normal normal-case"> Santiago</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase ">
          Propietario :<span className="font-normal normal-case"> Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase ">
          Email :
          <span className="font-normal normal-case"> correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase ">
          Fecha Alta :
          <span className="font-normal normal-case">
            {" "}
            10 de Octubre de 2023
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase ">
          Síntomas :
          <span className="font-normal normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            dicta atque qui aliquid harum eos labore accusamus maiores, iure
            iste ipsam sapiente doloremque dolorem at quis nam sed aperiam?
            Reiciendis.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;

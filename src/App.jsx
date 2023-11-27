import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-20 md:flex">
        <div className="md:flex md:space-x-6">
          <Formulario setPacientes={setPacientes} pacientes={pacientes} />
          <ListadoPacientes className="md:w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default App;

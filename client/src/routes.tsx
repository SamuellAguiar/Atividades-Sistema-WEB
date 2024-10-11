import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ListEstados from "./components/estados/ListEstados.tsx";
import CreateEstado from "./components/estados/CreateEstado.tsx";
import UpdateEstado from "./components/estados/UpdateEstado.tsx"; // Ensure this path is correct and the file exists
import CreateCidade from "./components/cidades/CreateCidade.tsx";
import ListCidades from "./components/cidades/ListCidades.tsx";
import UpdateCidade from "./components/cidades/UpdateCidades.tsx";
import ListTipos from "./components/Tipos_sanguineos/ListTipos.tsx";
import CreateTipo from "./components/Tipos_sanguineos/CreateTipo.tsx";
import UpdateTipo from "./components/Tipos_sanguineos/UpdateTipo.tsx";
import ListLocais from "./components/locais/ListLocais.tsx";
import CreateLocal from "./components/locais/CreateLocal.tsx";
import UpdateLocal from "./components/locais/UpdateLocal.tsx";
import ListPessoas from "./components/pessoas/ListPessoas.tsx";
import CreatePessoa from "./components/pessoas/CreatePessoa.tsx";
import UpdatePessoa from "./components/pessoas/UpdatePessoa.tsx";
import ListDoacoes from "./components/doacoes/ListDoacoes.tsx";
import CreateDoacao from "./components/doacoes/CreateDoacao.tsx";
import UpdateDoacao from "./components/doacoes/UpdateDoacao.tsx";

const AppRoutes = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/estados" element={<ListEstados />} />
                    <Route path="/estados/create" element={<CreateEstado />} />
                    <Route path="/estados/update/:id" element={<UpdateEstado />} />

                    <Route path="/cidades" element={<ListCidades />} />
                    <Route path="/cidades/create" element={<CreateCidade />} />
                    <Route path="/cidades/update/:id" element={<UpdateCidade />} />

                    <Route path="/tipos" element={<ListTipos />} />
                    <Route path="/tipos/create" element={<CreateTipo />} />
                    <Route path="/tipos/update/:id" element={<UpdateTipo />} />

                    <Route path="/locais" element={<ListLocais />} />
                    <Route path="/locais/create" element={<CreateLocal />} />
                    <Route path="/locais/update/:id" element={<UpdateLocal />} />

                    <Route path="/pessoas" element={<ListPessoas />} />
                    <Route path="/pessoas/create" element={<CreatePessoa />} />
                    <Route path="/pessoas/update/:id" element={<UpdatePessoa />} />

                    <Route path="/doacoes" element={<ListDoacoes />} />
                    <Route path="/doacoes/create" element={<CreateDoacao />} />
                    <Route path="/doacoes/update/:id" element={<UpdateDoacao />} />

               </Routes>
          </BrowserRouter>
     )
}
export default AppRoutes;
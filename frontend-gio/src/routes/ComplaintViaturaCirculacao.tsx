import { useEffect, useState } from "react";
import Viatura from "../components/Viatura";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import axios from "axios";

interface Policial{
  id:string;
  nome:string;
  comandante:boolean;
}
interface Viatura {
  id: string;
  placa: string;
  policiais: Policial[];
}

export default function ComplaintViaturaCirculacao() {
  const api_url = import.meta.env.VITE_REACT_API_URL;
  const [viaturas, setViaturas] = useState<Viatura[]>([]);

  const fetchViaturas = async () => {
    try {
      const response = await axios.get<Viatura[]>(`${api_url}/viaturas`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });

      if (response.status === 200) {
        console.log('Dados recebidos com sucesso!: ', response.data);
        setViaturas(response.data);
      } else {
        console.error('Erro ao receber os dados');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  useEffect(() => {
    fetchViaturas();
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="px-48 py-2">
        <h1 className="font-bold text-5xl">Viaturas em Circulação</h1>
        <div className="pt-6">
          {/* <p className="font-bold text-2xl pb-6">Mais próxima</p> */}
          {viaturas.map((viatura)=>(
            <Viatura
              idViatura={viatura.id}
              placa={viatura.placa}
              responsavel={viatura.policiais.filter(policial => policial.comandante == true)}
              efetivo={viatura.policiais.map((policial)=>{return `${policial.nome}, `})}
              areaAtuacao={"Região Metropolitana"}
            />
          ))}
        </div>

       {/*  <p className="font-bold text-2xl pt-6 pb-6">Outras viaturas</p>
        <div className="">
          <Viatura
            idViatura={"0000"}
            placa={"aaaaaa"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}

          />
          <Viatura
            idViatura={"0000"}
            placa={"aaaaaa"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}
          />
          <Viatura
            idViatura={"0000"}
            placa={"aaaaaa"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}
          />
        </div>
         */}
      </div>
    </AuthenticatedLayout>
  );
}

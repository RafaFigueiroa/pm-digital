import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import policialbg from "../assets/policialbg.png";
import PMDigitalcomSlogan from "../assets/PM Digital com Slogan.svg"

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface IconLabelProps {
  iconSrc: string;
  label: string;
}
const IconLabel: React.FC<IconLabelProps> = ({ iconSrc, label }) => (
  <div className="flex gap-5 text-3xl font-light text-white">
    <Image src={iconSrc} alt={label} className="shrink-0 w-9 h-9" />
    <div className="italic">{label}</div>
  </div>
);

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação simulada
    if (matricula === 'user' && senha === 'password') {
      localStorage.setItem('authToken', 'fakeToken');
      navigate('/home');
    } else {
      alert('Matrícula ou senha inválida');
    }
  };

  return (

    <main className="bg-blue-700 flex flex-col justify-center">
      <div className="flex mx-auto gap-0 sm:gap-8 lg:mx-0 px-12 lg:px-0 items-center lg:flex-row h-screen">
        <section className="justify-center">
          <Image
            src={policialbg}
            alt="Background"
            className="hidden lg:block object-cover lg:w-[36rem] xl:w-[48rem] 2xl:w-[65rem] h-screen brightness-75"
          />
        </section>
        <section className="flex flex-col mx-auto items-end text-end justify-center bg-blue-700 text-white">
          <div className="w-full max-w-md 2xl:max-w-lg px-4 lg:px-16 2xl:px-12 mx-auto my-auto">
            <Image
              src={PMDigitalcomSlogan}
              alt="Logo"
              className="w-auto"
            />
            <form className="pt-20" onSubmit={handleLogin}>

              <div className="mb-5">
                <input
                  type="text"
                  className="mt-2 p-3 w-full border-1 border-b bg-transparent text-white italic"
                  placeholder="Matrícula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>
              <div className="mb-5">

                <input
                  type="password"
                  className="mt-2 p-3 w-full border-1 border-b bg-transparent text-white italic"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <a href="#" className="text-xl italic underline">
                Esqueci minha senha
              </a>

              <button
                type="submit"
                className="mt-10 p-4 w-full bg-white text-blue-700 text-2xl font-bold rounded-lg">
                Entrar
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
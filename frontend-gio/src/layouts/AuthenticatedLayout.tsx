import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarMike from '../components/global/NavbarMike';

interface AuthenticatedLayoutProps{
  children: React.ReactNode;
}

//implementar a verificação de autenticação aqui
const useAuth = () => {
  const token = localStorage.getItem('authToken');
  return !!token;
};

function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <NavbarMike />

      <main className='lg:py-10 py-8'>
        {children}
      </main>
    </>
  );
}

export default AuthenticatedLayout;
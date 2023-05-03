import { Foorter } from './Footer';
import { Header } from './Header';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Foorter />
    </div>
  );
};

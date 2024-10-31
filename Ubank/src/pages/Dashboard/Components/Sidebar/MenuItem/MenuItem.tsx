// MenuItem.tsx
import { Link } from 'react-router-dom';
import './MenuItem.css';

interface MenuItemProps {
  icon: string;
  text: string;
  to: string; // Ruta de navegación
  active?: boolean; // Este prop es opcional
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, to, active = false }) => {
  return (
    <li className={`menu-item ${active ? 'active' : ''}`}>
      <Link to={to}>
        <span className="icon">{icon}</span>
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;

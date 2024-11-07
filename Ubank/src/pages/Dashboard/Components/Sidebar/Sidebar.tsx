import MenuItem from './MenuItem/MenuItem';
import './Sidebar.css';

// Importa los iconos en blanco y oscuro
import dashboardIcon from '../../../../assets/Dashboard-w.webp';
import dashboardIconHover from '../../../../assets/Dashboard-b.webp';
import incomeIcon from '../../../../assets/dollar-coin-w.webp';
import incomeIconHover from '../../../../assets/dollar-coin.webp';
import savingsIcon from '../../../../assets/wallet-w.webp';
import savingsIconHover from '../../../../assets/wallet-b.webp';
import signOutIcon from '../../../../assets/signout-w.webp';
import signOutIconHover from '../../../../assets/signout-b.webp';
import logo from '../../../../assets/UBank-logo-g.webp';

interface SidebarProps {
  onLogout: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="UBank Logo"  />
      </div>

      <nav className="menu">
        <ul>
          <MenuItem 
            iconSrc={dashboardIcon} 
            iconHoverSrc={dashboardIconHover} 
            text="Dashboard" 
            to="/dashboard" 
          />
          <MenuItem 
            iconSrc={incomeIcon} 
            iconHoverSrc={incomeIconHover} 
            text="Income and expenses" 
            to="/incomes" 
          />
          <MenuItem 
            iconSrc={savingsIcon} 
            iconHoverSrc={savingsIconHover} 
            text="Savings goals" 
            to="/savings-goals" 
          />
          <MenuItem 
            iconSrc={signOutIcon} 
            iconHoverSrc={signOutIconHover} 
            text="Sign out" 
            to="#" 
            onClick={onLogout} // Pasa la función onLogout aquí
          />
        </ul>
      </nav>

      
    </div>
  );
};

export default Sidebar;



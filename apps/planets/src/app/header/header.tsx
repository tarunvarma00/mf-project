import styles from './header.module.scss';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <div className={styles['header']}>
        <div className="logo">
          <Link to="/">Home</Link>
        </div>
        <div className={styles['left_menu']}>
          <ul>
            <li>
              <Link className="menu_link" to="/planets">
                <span>Planets</span>
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/asteroids">
                <span>Asteroids</span>
              </Link>
            </li>

            <li>
              <Link className="menu_link" to="/contact">
                <span>Contact</span>
              </Link>
            </li>

            <li>
              <Link className="menu_link" to="/user_bookmarks">
                <span>Bookmarks</span>
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/store">
                <span>Store</span>
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/transactions">
                <span>Transaction</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

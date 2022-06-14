import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <h2>Here is the navbar!!</h2>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
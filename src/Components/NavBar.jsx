import { Outlet, Link} from 'react-router'

const NavBar = () => {
  return (
    <>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          top: 0,
        }}
        to="/"
      >
        <h2>Home</h2>
      </Link>
      <Outlet />
    </>
  );
};

export default NavBar

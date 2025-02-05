import { Outlet, Link} from 'react-router'

const NavBar = () => {
  return (
    <>
      <Link
        style={{width:"100%",display:"flex", justifyContent:"center"}}
        to="/"
      >
        <h2 style={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          top: 0,
        }}>Home</h2>
      </Link>
      <Outlet />
    </>
  );
};

export default NavBar

import { Link } from "react-router";

const LinkCharacters = ({ details }) => {
  return (
    <>
      <Link
        to={`details/${details.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <p>{details.firstName}</p>
      </Link>
    </>
  );
};

export default LinkCharacters;

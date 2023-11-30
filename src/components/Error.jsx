import PropTypes from "prop-types"; // Import PropTypes

const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {children}
    </div>
  );
};

// PropTypes for Error component
Error.propTypes = {
  children: PropTypes.node.isRequired, // Expect children to be a node and it's required
};
export default Error;

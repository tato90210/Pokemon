import PropTypes from 'prop-types';
import Navbar from './navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="flex-grow-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Layout;

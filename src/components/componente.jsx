// Componente.jsx
import PropTypes from 'prop-types';
import Layout from './layout';
const Componente = ({ Datas }) => {
  const DynamicComponent = Datas; // Asegúrate de que Datas sea un componente válido
  return (
    <Layout>
      <DynamicComponent />
    </Layout>
  );
};
Componente.propTypes = {
  Datas: PropTypes.elementType.isRequired,
};
export default Componente;

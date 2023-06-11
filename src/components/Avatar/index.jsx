import styles from './styles.module.css';
import PropTypes from 'prop-types';

export function Avatar({ urlImage }) {
  return (
    <div className={styles.avatar}>
      <img src={urlImage} alt="Foto do perfil do usuário" />
    </div>
  );
}

Avatar.propTypes = {
  urlImage: PropTypes.string.isRequired,
};

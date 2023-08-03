import styles from './styles.module.css';
import PropTypes from 'prop-types';


export function Avatar({ urlImage, hasBorder = true }) {
  const avatarStyles = hasBorder ? styles.avatarWithBorder : styles.avatar;
  return (
    <div className={avatarStyles}>
      <img src={urlImage} alt="Foto do perfil do usuário" />
    </div>
  );
}

Avatar.propTypes = {
  urlImage: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

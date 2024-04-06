import styles from './styles.module.css';

type AvatarProps = {
  urlImage: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ urlImage, hasBorder = true, alt }: AvatarProps) {
  const avatarStyles = hasBorder ? styles.avatarWithBorder : styles.avatar;
  return (
    <div className={avatarStyles}>
      <img src={urlImage} alt={alt} loading='lazy' decoding='async' />
    </div>
  );
}
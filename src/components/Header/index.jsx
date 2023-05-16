import styles from './styles.module.css';
import LogoSVG from '../../assets/logo.svg';

console.log(LogoSVG);
console.log(styles);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoSVG} alt="logo" className={styles.img} />
      <h1 className={styles.title}>Ignite Feed</h1>
    </header>
  );
}

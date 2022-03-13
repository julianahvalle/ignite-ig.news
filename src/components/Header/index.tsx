import Image from 'next/image';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.headerCotainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" height="30" width="108"/>
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Posts</a>
        </nav>

        <SingInButton/>
      </div>
    </header>
  
  );
}
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function CharacterCard({ character }) {
  return (
    <Link to={`/${character.char_id}`} className={styles['character']}>
      <div className={styles['character_img-container']}>
        <img alt={character.name} src={character.img} className={styles['character_img']} />
      </div>
      <div className={styles['character_info']}>
        <p className={styles['character_name']}>
          {character.name}
        </p>
        {character.birthday === 'Unknown' ?
          <p className={styles['character_birthday']}>
            Date of birth unknown
          </p> :
          <p className={styles['character_birthday']}>
            {character.birthday}
          </p>}
      </div>
    </Link>
  );
}

export default CharacterCard;

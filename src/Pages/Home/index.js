import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import CharacterCard from '../../Components/CharacterCard';
import logo from '../../assets/img/breaking_bad_logo.png';
import Loading from '../../Components/Loading';

function Home() {
  const [characters, setCharacters] = useState()
  useEffect(() => {
    async function charactersData() {
      let characters = await fetch('https://breakingbadapi.com/api/characters/')
      characters = await characters.json()
      setCharacters(characters)
    }

    charactersData()
  }, [])

  return (
    <>
      <h1 className={styles['title']}>
        <img alt='the_breaking_bad' src={logo} className={styles['logo']} />
      </h1>
      {characters ?
        <div className={styles['characters-list']}>
          {characters.map((character, index) =>
            <CharacterCard character={character} key={index} />
          )}
        </div> :
        <div className={styles['loading-container']}>
          <Loading />
        </div>}
    </>
  );
}

export default Home;

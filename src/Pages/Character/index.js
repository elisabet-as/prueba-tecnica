import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';

import styles from './styles.module.scss';

function Character() {
  const { characterId } = useParams()
  const [character, setCharacter] = useState()
  const [quotes, setQuotes] = useState()
  const [quoteRandom, setQuoteRandom] = useState()

  useEffect(() => {
    async function getCharacterData() {
      let characterData = await fetch(`https://breakingbadapi.com/api/characters/${characterId}/`)
      characterData = await characterData.json()
      setCharacter(characterData[0])

      let quotesData = await fetch(`https://breakingbadapi.com/api/quote?author=${characterData[0].name}/`)
      quotesData = await quotesData.json()
      setQuotes(quotesData)

      const quoteRandom = quotesData[Math.floor(Math.random() * quotesData.length)]
      setQuoteRandom(quoteRandom)
    }

    getCharacterData()
  }, [characterId])

  const getQuoteRandom = useCallback(() => {
    const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)]
    setQuoteRandom(quoteRandom)
  }, [quotes])

  return (
    character ?
      <div className={styles['character']}>
        <div className={styles['character_img-container']}>
          <img alt={character.name} src={character.img} className={styles['character_img']} />
        </div>
        <div className={styles['character_info-container']}>
          <div className={styles['character_info-content']}>
            <p className={`${styles['character_text']} ${styles['character_name']}`}>
              {character.name}
            </p>
            <p className={styles['character_text']}>
              {`Nickname: ${character.nickname}`}
            </p>
            <p className={styles['character_text']}>
              {`Date of birth: ${character.birthday}`}
            </p>
            <p className={`${styles['character_text']} ${styles['character_arr']}`}>
              {`Occupation: ${character.occupation.map((occ, index) => <span key={index}>{occ}</span>)}`}
            </p>
            <p className={styles['character_text']}>
              {`Status: ${character.status}`}
            </p>
            <p className={styles['character_text']}>
              {`It appears in: ${character.category}`}
            </p>
            {character.appearance.length > 1 ?
              <p className={`${styles['character_text']} ${styles['character_arr']}`}>
                {`Present in the seasons of Breaking Bad: ${character.appearance.map((app, index) =>
                  <span key={index}>{app}</span>)}`}
              </p>
              : null}
            {character.better_call_saul_appearance.length > 1 ?
              <p className={`${styles['character_text']} ${styles['character_arr']}`}>
                {`Present in the seasons of Better Call Saul: ${character.better_call_saul_appearance.map((app, index) =>
                  <span key={index}>{app}</span>)}`}
              </p>
              : null}
            <p className={styles['character_text']}>
              {`Represented by: ${character.portrayed}`}
            </p>
          </div>
          <div className={styles['character_quote-container']}>
            {quotes && quotes.length < 1 ?
              <p className={`${styles['character_text']} ${styles['character_not-quote']}`}>
                This character didn't say anything interesting.
              </p> :
              <>
                {quoteRandom ?
                  <p className={styles['character_text']}>
                    "{quoteRandom.quote}"
                  </p> :
                  <div>
                    <Loading />
                  </div>}
                {quotes?.length > 1 ?
                  <button onClick={getQuoteRandom} className={styles['character_quote-button']}>
                    Other quote
                  </button>
                  : null}
              </>}
          </div>
        </div>
      </div> :
      <div className={styles['loading-container']}>
        <Loading />
      </div>
  );
}

export default Character;

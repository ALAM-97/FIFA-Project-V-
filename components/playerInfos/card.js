import styles from '../../styles/card.module.css'
// import Image from 'next/image'


const Card = (props) => {

  return (
    <div className={styles.cardContainer}>
      <h4>{props.player.name}</h4>
      <img
        src={`${props.player.img}`}
        alt={props.player.name}
        width="640px"
        height="894px"
      />
      <h5>{props.player.rarity}</h5>
    </div>
  );
}

export default Card;
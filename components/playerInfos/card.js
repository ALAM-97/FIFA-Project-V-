import styles from '../../styles/card.module.css'

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <h4>{props.player.name}</h4>
      <img src={`./${props.player.img}`} alt={props.player.name} />
      <h5>{props.player.rarity}</h5>
    </div>
  );
}

export default Card;
// components
import Card from '../components/playerInfos/card'
import Info from './playerInfos/info';
// CSS
import styles from '../styles/playerInfos.module.css'

const PLAYER =
  {
    name: 'MESSI',
    rarity: 'GOLD RARE',
    img: 'messi.webp'
  }


const PlayerInfos = () => {
  return ( 
    <div className={styles.playerInfos}>
      <Card player={PLAYER} />
      <Info />
    </div>
  );
}
export default PlayerInfos;
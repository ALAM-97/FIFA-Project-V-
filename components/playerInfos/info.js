// components
import SingleStatsContainer from './singleStatsContainer';
// CSS
import styles from '../../styles/info.module.css'
// JSON
import STATS from '../../JSON/attributeDetails.json'

const Info = () => {
  return ( 
    <div className={styles.info}>
      <h4>ATTRIBUTE DETAILS</h4>
      <div className={styles.infoCategories}>
        {STATS.map(category => (
          <SingleStatsContainer key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Info;
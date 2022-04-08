// CSS
import styles from '../../styles/info.module.css'
import Ability from './ability';

const SingleStatsContainer = (props) => {
  return (
    <div className={styles.singleCategory}>
      <h5>{props.category.title}</h5>
      <div
        className={styles.semicircle}
        style={{
          borderImage: `linear-gradient(to right, 
            ${
              (props.category.overall >= 70 && "#1cb310") ||
              (props.category.overall <= 50 && "#e51434") ||
              (50 > props.category.overall < 70 && "#ebba2f")
            } 
            ${props.category.overall}% , rgb(113, 113, 113) ${
            props.category.overall + 1
          }%) 1`,
        }}
      >
        <div
          className={styles.num_text}
          style={{
            color: `${
              (props.category.overall > 70 && "#1cb310") ||
              (props.category.overall <= 50 && "#e51434") ||
              (50 > props.category.overall < 70 && "#ebba2f")
            }`,
          }}
        >
          {props.category.overall}
        </div>
      </div>
      <Ability stats={props.category.stats} />
    </div>
  );
}

export default SingleStatsContainer;
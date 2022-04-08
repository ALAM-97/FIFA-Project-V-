// CSS
import styles from '../../styles/info.module.css'

const Ability = (props) => {
  return (
    <>
      {props.stats.map((stat) => (
        <div className={styles.single_stat_info} key={stat.name}>
          <div className={styles.info_stat}>
            <p>{stat.name}</p>
            <div className={styles.number}>{stat.number}</div>
          </div>
          <div className={styles.stat_line}>
            <div
              className={styles.stat_line_colored}
              style={{
                background: `${
                  (stat.number > 70 && "#1cb310") ||
                  (stat.number <= 50 && "#e51434") ||
                  (50 > stat.number < 70 && "#ebba2f")
                }`,
                width: `${
                  stat.number
                }%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Ability;
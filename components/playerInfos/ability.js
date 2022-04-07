// CSS
import styles from '../../styles/ability.module.css'

const Ability = (props) => {

  console.log(props.stats)
  return (
    <>
      {props.stats.map((stat) => (
        <div className={styles.single_stat_info}>
          <div className={styles.info}>
            <p>{stat.name}</p>
            <div className={styles.number}>{stat.number}</div>
          </div>
          <div className={styles.stat_line}>
            <div
              class={styles.stat_line_colored}
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
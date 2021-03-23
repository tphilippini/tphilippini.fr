import classnames from 'classnames';
import styles from './waves.module.scss';

const Waves = ({ waveClass }) => {
  return (
    <div className={classnames(styles.container, styles[waveClass])}>
      <div className={styles.waves}></div>
    </div>
  );
};

export default Waves;

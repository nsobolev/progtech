import styles from './card.less'
import Button from '../Button'

const Card = ({ slogan, children, onClick }) => {
  return <div className={styles.card}>
    <div className={styles.card__header}>
      <h3 className={styles.card__slogan}>{slogan}</h3>
    </div>
    <div className={styles.card__content}>
      { children }
    </div>
    <div className={styles.card__footer}>
      <Button onClick={onClick}>No</Button>
      <Button onClick={onClick} view="outline">Yes</Button>
    </div>
  </div>
}

export default Card

import styles from './button.less'
import classNames from 'classnames'

const Button = ({ type = 'button', view = 'default', onClick = () => {}, children }) => {
  return <button
    className={classNames(styles.button, { [styles.button_view_outline]: view === 'outline' })}
    type={type}
    onClick={onClick}
  >
    { children }
  </button>
}

export default Button

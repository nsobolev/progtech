import { useState, useCallback } from 'react'

import Card from './components/Card'
import Button from './components/Button'
import Modal from './components/Modal'

import styles from './styles/content.less'
import './styles/bootstrap.less'

import { ReactComponent as AlertSVG } from './public/svg/alert.svg'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = useCallback(
    () => {
      setIsOpenModal(_ => true)
    }
  )

  const closeModal = useCallback(
    () => {
      setIsOpenModal(_ => false)
    }
  )


  return (
    <div className="App">
      <Button onClick={openModal}>Remove brand</Button>
      <Modal
        isOpen={ isOpenModal }
        setIsClose={ closeModal }
      >
        <div className={styles.content}>
          <Card slogan="Remove brand" onClick={closeModal}>
            <div className={styles.content__data}>
              <div className={styles.content__icon}>
                <AlertSVG />
              </div>
              <div className={styles.content__info}>
                <p className={styles.content__title}>Are sure you wish to remove FAME_4?</p>
                <p className={styles.content__description}>The remaining stocks are worth: $768.231</p>
              </div>
            </div>
          </Card>
        </div>
      </Modal>
    </div>
  );
}

export default App;

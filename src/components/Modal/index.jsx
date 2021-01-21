import { useRef } from 'react'
import ReactModal from 'react-modal'

import classNames from 'classnames'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import styles from './modal.less'
import { ReactComponent as CloseSVG } from '../../public/svg/close.svg'

const Modal = ({ isOpen, setIsClose, children }) => {
  const modalRef = useRef(null)

  const afterOpenModal = () => {
    if (modalRef.current) {
      disableBodyScroll(modalRef.current)
    }
  };

  const afterCloseModal = () => {
    if (modalRef.current) {
      enableBodyScroll(modalRef.current)
    }
  };

  return (
    <ReactModal
      className={classNames(styles.modal)}
      overlayClassName={styles.modal__overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={setIsClose}
      onAfterOpen={afterOpenModal}
      onAfterClose={afterCloseModal}>
      <div ref={modalRef}>
        <div className={styles.modal__close}>
          <button className={styles.modal__closeButton} type="button" onClick={setIsClose}>
            <CloseSVG className={styles.modal__closeSvg} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </ReactModal>
  )
}

export default Modal

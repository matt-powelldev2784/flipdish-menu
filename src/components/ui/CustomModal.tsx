import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

interface CustomModalProps {
  isOpen: boolean
  onRequestClose: () => void
  contentLabel: string
  children: React.ReactNode
}

const CustomModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children
}: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      overlayClassName="overlay"
    >
      {children}
    </Modal>
  )
}

export default CustomModal

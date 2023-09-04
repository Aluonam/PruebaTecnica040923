import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const BotonDetalles = ({usuario}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
         Detalles
      </Button>
      <Modal title={`${usuario.name.first} ${usuario.name.last}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={usuario.picture.large}></img>
        <p>{usuario.login.username}</p>
        <p>{usuario.login.password}</p>
      </Modal>
    </>
  );
};
export default BotonDetalles;
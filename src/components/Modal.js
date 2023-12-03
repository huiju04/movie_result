import { useState } from "react"
import styled from "styled-components"

const Button = styled.button``;
const SModal = styled.div``;
const Header = styled.header``;
const Title = styled.h3``;
const Body = styled.div``;
const Footer = styled.footer``;


export const Modar = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <SModal show={show} onHide={handleClose} animation={false}>
          <Header closeButton>
            <Title>Modal heading</Title>
          </Header>
          <Body>Woohoo, you are reading this text in a modal!</Body>
          <Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Footer>
        </SModal>
      </>
    );

}




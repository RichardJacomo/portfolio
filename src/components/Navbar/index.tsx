import { useState, useContext } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
  NavbarWhite
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";
import { BlackWhiteContext } from "@/contexts/BlackWhiteProvider.";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}


export const NavBar = (): JSX.Element => {

  const { mode, setMode } = useContext(BlackWhiteContext);

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <>
    {!mode?( <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWrapper>) 
    : 
    ( <NavbarWhite>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWhite>)}
   
    </>
  );
};

export const NavLinks = (): JSX.Element => {

  const { mode, setMode } = useContext(BlackWhiteContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    mode? setMode(false) : setMode(true)
  };

  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        Home
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        Projetos
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        Contato
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        Redes Sociais
      </Button>
      <Button type={!mode? "toggleTheme" : "darkMode"} onClick={handleClick}>
      </Button>
    </NavbarLinks>
  );
};

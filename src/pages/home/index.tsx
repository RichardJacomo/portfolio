// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button, ButtonNeon } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderWhite,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  Techs,
} from "./style";

import React, { useState, useEffect, useContext } from "react";
import { BlackWhiteContext } from "@/contexts/BlackWhiteProvider.";

export const TextAnimation = () => {
  const [text, setText] = useState("");
  const nameUser = "Olá, me chamo Richard Jácomo e sou Desenvolvedor Web FullStack.";
  
  useEffect(() => {
  let currentIndex = 0;
  const intervalId = setInterval(() => {
    if (currentIndex >= nameUser.length) {
      clearInterval(intervalId);
    } else {
      setText(nameUser.slice(0, currentIndex + 1));
      currentIndex++;
    }
  }, 60);
  
  return () => clearInterval(intervalId);
}, [nameUser]);

return <>{text}</>;

}

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`;
  const { mode } = useContext(BlackWhiteContext);
  const [isMobile, setIsMobile] = useState(false);

  const mediaQuery = window.matchMedia("(max-width: 800px)");
  // useEffect(() => {
  //   setIsMobile(mediaQuery.matches)
  // }, []);

  return (
    <main id="home">
      {!mode && !mediaQuery.matches? (
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              <Text as="span" type="heading1" color="brand1">
                <TextAnimation />
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              Seja bem vindo(a) ao meu portfólio e fique à vontade para ver os meus projetos :)
            </Text>
            <HeaderButtonsArea>
              {!mode? 
              (<ButtonNeon as="a" href="#projects">
                Ver projetos
              </ButtonNeon>)
              :
              (<Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>)
              }
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <Techs>Minha Stack</Techs>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>)
      :
      (<HeaderWhite>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              <Text as="span" type="heading1" color="brand1">
                <TextAnimation />
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              Seja bem vindo(a) ao meu portfólio e fique à vontade para ver os meus projetos :)
            </Text>
            <HeaderButtonsArea>
              {!mode? 
              (<ButtonNeon as="a" href="#projects">
                Ver projetos
              </ButtonNeon>)
              :
              (<Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>)
              }
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <Techs>Minha Stack</Techs>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </HeaderWhite>)}

      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};

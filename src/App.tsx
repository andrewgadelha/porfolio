import {
  Text,
  Box,
  Button,
  Flex,
  Heading,
  Container,
  Link,
  Tag,
  Image,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

import {
  RiReactjsLine,
  RiNodejsFill,
  RiTailwindCssLine,
  RiPhpFill,
} from "react-icons/ri";
import { Icon } from "./components/Icon";
import { FrameIcon } from "./components/FrameIcon";
import { Link as ScrollLink } from "react-scroll";

export default function App() {
  return (
    <Flex direction={"column"} w="100%" p={0} m={0}>
      <Container
        maxW="container.xl"
        spaceY={10}
        h={"4vh"}
        position={"relative"}
        zIndex={1}
        placeSelf={"start"}
        p={0}
        m={0}
      >
        <Heading color="cyan.400" mt={"1vh"} maxW={"100%"}>
          <Flex direction={"row"}>
            <Text
              fontWeight={"black"}
              fontSize={{ base: 25, lg: 40 }}
              ml={5}
              color="#FB034F"
            >
              {"</>"}
            </Text>
            <Flex
              direction={"row"}
              alignSelf={"right"}
              marginLeft={"auto"}
              mr={10}
              gap={"20%"}
              placeSelf={"flex-end"}
            >
              <Link
                fontSize={{ base: 15, lg: 20 }}
                color="#FB034F"
                href="https://www.linkedin.com/in/andrewgadelha/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                fontSize={{ base: 15, lg: 20 }}
                color="#FB034F"
                href="https://github.com/andrewgadelha"
                target="_blank"
              >
                Github
              </Link>
            </Flex>
          </Flex>
        </Heading>
      </Container>

      <Container
        maxW="container.xl"
        margin={0}
        p={0}
        spaceY={10}
        position={"absolute"}
        zIndex={0}
        top={0}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
          gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"}
          position={"relative"}
          bgColor={"#3D17E8"}
          h={{ base: "vh", lg: "100vh" }}
          p={4}
          zIndex={0}
        >
          <Text
            fontSize={{ base: 72, lg: 160 }}
            fontWeight={"black"}
            color={"#2ED1F2"}
            h={"fit-content"}
            gridColumn={"1 / 6"}
            gridRow={"-1 / -1"}
            lineHeight={"shorter"}
            alignSelf={"end"}
            position={"relative"}
            zIndex={5}
          >
            portfólio.
          </Text>

          <Box gridColumn={'2 / span 3'} gridRow={3} zIndex={1} placeSelf={'flex-start'}>
            <Icon
              iconName="Vector6"
              iconStyle={{ fill: "#2ED1F2" }}
              w={{ base: "110px", lg: "300px" }}
            />
          </Box>
          <Box gridColumn={4} gridRow={2}>
            <Icon
              iconName="smile"
              iconStyle={{ fill: "url(#gradGlobal1)" }}
              gradient={[
                {
                  id: "gradGlobal1",
                  colors: ["#2ED1F2", "rgba(255, 255, 255, 0)"],
                  type: "linear",
                },
              ]}
              w={{ base: "60px", lg: "80px" }}
            />
          </Box>

          <Text
            fontSize={{ base: 19, lg: 20 }}
            gridColumn={5}
            gridRow={3}
            p={4}
            justifyContent={"center"}
            borderWidth={1}
            borderColor={"#2ED1F2"}
            lineHeight={"shorter"}
            alignSelf={"center"}
            color={"#2ED1F2"}
            w={"10em"}
          >
            Developer Full Stack
          </Text>
          <Box
            gridColumn={5}
            gridRow={5}
            alignSelf={"flex-end"}
            justifySelf={"center"}

          >
            <ScrollLink to="projetos" smooth={true} duration={500}>
              <Button
                fontSize={{ base: 14, lg: 18 }}
                bgColor={"#2ED1F2"}
                color={"#3D17E8"}
                fontWeight={"bold"}
                size={"md"}
                gridColumn={5}
                gridRow={5}
                alignSelf={"center"}
                w={"8em"}
                mb={2}
              >
                Projetos
              </Button>
            </ScrollLink>
          </Box>
          <Box
            gridColumn={5}
            gridRow={6}
            alignSelf={"flex-start"}
            justifySelf={"center"}
          >
            <Button
              fontSize={{ base: 14, lg: 18 }}
              borderColor={"#2ED1F2"}
              color={"#2ED1F2"}
              fontWeight={"bold"}
              variant="outline"
              size={"md"}
              w={"8em"}

            >
              <a
                target="_blank"
                href="/andrewgadelha.pdf"
                rel="nooper noreferrer"
              >
                Currículo
              </a>
            </Button>
          </Box>
        </Box>

        <Box
          flex={1}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          mx={"auto"}
        >
          <FrameIcon
            iconName="titleSeparator"
            iconStyle={{ fill: "#E109FF" }}
            w={"100%"}
            borderWidth="0px"
          >
            <Heading
              flex={1}
              fontFamily="'Orbitron', sans-serif"
              fontSize={{ base: 18, lg: "4xl" }}
              lineHeight={"shorter"}
              h={"fit-content"}
              color={"#2ED1F2"}
              fontWeight={"bold"}
              textAlign={"center"}
              mt={{ base: "-2", lg: "-6" }}
              gridColumn={"1 / 2"}
            >
              Sobre Mim
            </Heading>
          </FrameIcon>
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gapY={8}
          alignContent={"center"}
          placeSelf={"center"}

        >
          <Box
            flex={1}
            display={"grid"}
            gridTemplateColumns={"3 "}
            placeItems={"center"}
            alignSelf={"center"}
            w={'100%'}
            p={0}
            gap={1}
            justifyContent="center"
            alignItems={"center"}
            alignContent="center"
          >
            <Flex
              p={0}
              gridRow={"1 / 6"}
              gridColumn={"3 "}
              direction={"row"}
              placeSelf={"center"}
              placeItems="center"
            >
              <FrameIcon
                iconName="photoFrame"
                iconStyle={{ fill: "#E109FF" }}
                w={{ base: "auto", lg: "300px" }}
                borderWidth="25px"
             
              >
                <Image
                  rounded="0"
                  src="/profile.jpg"
                  alt="Andrew Gadelha"
                />
              </FrameIcon>
            </Flex>
            <Icon
              iconName="smile"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#E91129" }}
              gridColumn={"4"}
              gridRow={"1"}
              transform="rotate(180deg)"
              opacity={0.7}
            />
            <Icon
              iconName="Vector46"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"4"}
              gridRow={"2"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector23"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"2"}
              gridRow={"3"}
              opacity={0.7}
            />
            <Icon
              iconName="X"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"2"}
              gridRow={"1"}
              opacity={0.7}
            />
            <Icon
              iconName="sphere"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"2"}
              gridRow={"2"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector39"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"2"}
              gridRow={"4"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector36"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"2"}
              gridRow={"5"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector31"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"4"}
              gridRow={"5"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector41"
              w={{ base: "30px", xl: "40px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"4"}
              gridRow={"4"}
              opacity={0.7}
            />

            <Icon
              iconName="Vector18"
              w={{ base: "30px", xl: "50px" }}
              iconStyle={{ fill: "#FB034F" }}
              gridColumn={"4"}
              gridRow={"3"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector2"
              w={{ base: "30px", xl: "50px" }}
              iconStyle={{ fill: "#2ED1F2" }}
              gridColumn={"4"}
              gridRow={"6"}
              transform="rotate(180deg)"
            />
            <Icon
              iconName="Vector22"
              w={{ base: "240px", xl: "290px" }}
              iconStyle={{ fill: "#E109FF" }}
              gridColumn={"3"}
              gridRow={"6"}
              opacity={0.7}
            />
            <Icon
              iconName="Vector45"
              w={{ base: "100px", xl: "100px" }}
              iconStyle={{ fill: "#E91129" }}
              gridColumn={"3"}
              gridRow={"7"}
              justifySelf={"center"}
              opacity={0.7}
            />
          </Box>
          <Box
            flex={1}
            p={0}
            display="grid"
            justifyContent={"center"}
            placeItems={"center"}
            gapY={5}
            maxW={"500px"}
          >
            <Box
              w={{ base: "90%", lg: "80%" }}
              h={"auto"}
              fontSize={14}
              borderWidth={1}
              p={3}
              borderColor={"#FB034F"}
              rounded={"sm"}
            >
              <Text maxW={"auto"} textAlign={'justify'} fontWeight={"bold"} color={"#2ED1F2"}>
                Sou um desenvolvedor de software recém formado, com habilidades
                em desenvolvimento web e mobile. Minha carreira está no início,
                mas com meus conhecimentos adquiridos na minha graduação procuro
                uma oportunidade para desenvolver experiências e aumentar minhas
                habilidades.
              </Text>
            </Box>
            <Flex flexDirection={"row"} gapX={{ base: 3, lg: 5 }}
             
            >
              <FrameIcon
                iconName="frameMiniCard"
                iconStyle={{ fill: "#FB034F" }}
                w={{ base: "300px", lg: "310px" }}
                h={"auto"}
                borderWidth="20px"
                transition="transform 0.3s ease-in-out" 
                _hover={{ transform: "scale(1.1)" }} 
                _active={{ transform: "scale(1.05)" }} 
              >
                <Box>
                  <Box
                    display="grid"
                    maxW={"100%"}
                    gridTemplateColumns="1fr 1fr 4fr"
                    color={"#2ED1F2"}
                    justifyContent="center"
                    p={0}
                    ml={2}
                    mt={-3}
                    fontSize={10}
                  >
                    <Text fontWeight="bold">Nome</Text>
                    <Text fontWeight="bold" textAlign={"right"} px={2}>
                      :
                    </Text>
                    <Text>Andrew S. Gadelha</Text>

                    <Text fontWeight="bold">Formação</Text>
                    <Text fontWeight="bold" textAlign={"right"} px={2}>
                      :
                    </Text>
                    <Text>Analise e Desenvolvimento de Sistemas</Text>

                    <Text fontWeight="bold">Faculdade</Text>
                    <Text fontWeight="bold" textAlign={"right"} px={2}>
                      :
                    </Text>
                    <Text>FATEC São Caetano do Sul</Text>

                    <Text fontWeight="bold">Cidade</Text>
                    <Text fontWeight="bold" textAlign={"right"} px={2}>
                      :
                    </Text>
                    <Text>São Paulo</Text>
                  </Box>
                </Box>
              </FrameIcon>

              <Box
                w={"auto"}
                h={"fit-content"}
                placeSelf={"center"}
                borderWidth={1}
                gap={5}
                p={2}
                borderColor={"#FB034F"}
              >
                <SimpleGrid row={4} color={"#E91129"}>
                  <RiReactjsLine size={35} title="React" /> {/* React */}
                  <RiNodejsFill size={35} title="Node" /> {/* Node.js */}
                  <RiPhpFill size={35} title="PHP" />
                  <RiTailwindCssLine title="TailwindCSS" size={35} />{" "}
                  {/* TailwindCSS */}
                </SimpleGrid>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Icon
          iconName="separator"
          iconStyle={{ fill: "#E109FF" }}
          w={{ base: "auto", lg: "auto" }}
          borderWidth="0px"
          transform="rotate(180deg)"
          transformOrigin={"center"}
        />

        <FrameIcon
          id="projetos"
          iconName="titleSeparator"
          iconStyle={{ fill: "#E109FF" }}
          w={"100%"}
          borderWidth="0px"
        >
          <Heading
            flex={1}
            fontFamily="'Orbitron', sans-serif"
            fontSize={{ base: 18, lg: "4xl" }}
            lineHeight={"shorter"}
            h={"fit-content"}
            color={"#2ED1F2"}
            fontWeight={"bold"}
            textAlign={"center"}
            mt={{ base: "-2", lg: "-6" }}
          >
            Projetos
          </Heading>
        </FrameIcon>
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignSelf={"center"}
          lg={{ px: "20" }}
          gapX={"17%"}
          gapY={5}
          placeItems={"center"}
          justifyContent={"center"}
          
        >
          <Box
            flex={1}
            p={0}
            minHeight={"400px"}
            placeItems={"center"}
            maxW={"90%"}
            lg={{ maxW: "380px" }}
            transition="transform 0.3s ease-in-out" 
            _hover={{ transform: "scale(1.1)" }} 
            _active={{ transform: "scale(1.05)" }} 
          >
            <Box
              bgColor={"#FB034F"}
              h={"200px"}
              w={"90%"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%,-50%"}
              zIndex={-1}
              position={"absolute"}
            >
              <Image
                rounded="0"
                src="/projeto1.png"
                w={"90%"}
                h={"100%"}
                pt={"5%"}
                objectFit="cover"
                alignSelf={"center"}
                justifySelf={"center"}
                objectPosition="top"
                alt="Andrew Gadelha"
              />
            </Box>
            <FrameIcon
              iconName="prototype"
              iconStyle={{ fill: "#E91129" }}
              w={"100%"}
              borderWidth={"60px"}
              zIndex={2}
              mt={"-30px"}
            >
              <Flex
                flexDirection={"column"}
                placeItems={"center"}
                gapY={2}
                maxW={{ base: "280px", lg: "300px" }}
                h={{ base: "150px", lg: "190px" }}
              >
                <Box>
                  <Heading
                    fontFamily="'Orbitron', sans-serif"
                    fontSize={{ base: 18, lg: "2xl" }}
                    lineHeight={"shorter"}
                    h={"fit-content"}
                    w={"fit-content"}
                    color={"#2ED1F2"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    To Do List
                  </Heading>
                </Box>

                <HStack gap="2" justifyContent={"center"} mb={2}>
                  <Tag.Root colorPalette={"teal"} rounded={0} opacity={0.9}>
                    <Tag.Label fontSize={9}>Typescript</Tag.Label>
                  </Tag.Root>
                  <Tag.Root colorPalette={"teal"} rounded={0} opacity={0.9}>
                    <Tag.Label fontSize={9}>TailwindCSS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root colorPalette={"teal"} rounded={0} opacity={0.9}>
                    <Tag.Label fontSize={9}>FireBase</Tag.Label>
                  </Tag.Root>
                </HStack>
                <Box flex={"1"} mb={2}>
                  <Text
                    color={"#2ED1F2"}
                    w={{ base: "260px", lg: "300px" }}
                    flex={"1"}
                    lineClamp="4"
                    fontSize={10}
                    textAlign={"center"}
                  >
                    Feito em React, com Typescript e TailWind. Com persistência
                    de dados via FireBase.
                  </Text>
                </Box>
                <HStack wrap="wrap" gap="10" mt={"auto"} mb={2}>
                  <Button
                    asChild
                    variant="surface"
                    size={"xs"}
                    rounded={0}
                    bgColor={"#3D17E8"}
                    color={"#2ED1F2"}
                  >
                    <a 
                    href="https://andrewgadelha.github.io/todolist/"
                    target="_blank"
                    >
                      Live App
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size={"xs"}
                    rounded={0}
                    color={"#3D17E8"}
                    borderColor={"#3D17E8"}
                  >
                    <a 
                    href="https://github.com/andrewgadelha/todolist"
                    target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                </HStack>
              </Flex>
            </FrameIcon>
          </Box>
          <Box
            flex={1}
            p={0}
            minHeight={"400px"}
            placeItems={"center"}
            maxW={"90%"}
            lg={{ maxW: "380px" }}
            transition="transform 0.3s ease-in-out" 
            _hover={{ transform: "scale(1.1)" }} 
            _active={{ transform: "scale(1.05)" }} 
          >
            <Box
              bgColor={"#FB034F"}
              h={"200px"}
              w={"90%"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%,-50%"}
              zIndex={-1}
              position={"absolute"}
            >
              <Image
                rounded="0"
                src="/projeto2.png"
                w={"90%"}
                h={"100%"}
                pt={"5%"}
                objectFit="cover"
                alignSelf={"center"}
                justifySelf={"center"}
                objectPosition="top"
                alt="Andrew Gadelha"
              />
            </Box>
            <FrameIcon
              iconName="prototype"
              iconStyle={{ fill: "#E91129" }}
              w={"100%"}
              borderWidth="60px"
              zIndex={2}
              mt={"-30px"}
            >
              <Flex
                flexDirection={"column"}
                placeItems={"center"}
                gapY={2}
                maxW={{ base: "280px", lg: "300px" }}
                h={{ base: "150px", lg: "190px" }}
              >
                <Box>
                  <Heading
                    fontFamily="'Orbitron', sans-serif"
                    fontSize={{ base: 18, lg: "2xl" }}
                    lineHeight={"shorter"}
                    h={"fit-content"}
                    w={"fit-content"}
                    color={"#2ED1F2"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    Agendando-Me
                  </Heading>
                </Box>

                <HStack wrap="wrap" gap="2" justifyContent={"center"} mb={2}>
                  <Tag.Root colorPalette={"teal"} rounded={0} opacity={0.9} >
                    <Tag.Label fontSize={9}>Bubble.io</Tag.Label>
                  </Tag.Root>
                  <Tag.Root colorPalette={"teal"} rounded={0} opacity={0.9}>
                    <Tag.Label fontSize={9}>Mobile First</Tag.Label>
                  </Tag.Root>
                </HStack>
                <Box flex={"1"} mb={2}>
                  <Text
                    color={"#2ED1F2"}
                    w={{ base: "260px", lg: "300px" }}
                    flex={"1"}
                    lineClamp="3"
                    fontSize={10}
                    textAlign={"center"}

                  >
                    Tcc da faculdade, realizado em grupo. 
                    WebApp de agenda para estudantes.
                  </Text>
                </Box>
                <HStack wrap="wrap" gap="10" mt={"auto"} mb={2}>
                  <Button
                    asChild
                    variant="surface"
                    size={"xs"}
                    rounded={0}
                    bgColor={"#3D17E8"}
                    color={"#2ED1F2"}
                  >
                    <a 
                    href="https://agendandome.bubbleapps.io/version-test/login"
                    target="_blank"
                    >
                      Live App
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size={"xs"}
                    rounded={0}
                    color={"#3D17E8"}
                    borderColor={"#3D17E8"}
                  >
                    <a 
                    href="https://andrewgadelha.notion.site/TCC-Curso-Superior-2022-17a92afdc59a806f9b20ff798936391a?pvs=74"
                    target="_blank"
                    >
                      Doc
                    </a>
                  </Button>
                </HStack>
              </Flex>
            </FrameIcon>
          </Box>
        </Flex>
        <Icon
          iconName="separator"
          iconStyle={{ fill: "#E109FF" }}
          w={{ base: "auto", lg: "auto" }}
          borderWidth="0px"
          transform="rotate(180deg)"
          transformOrigin={"center"}
        />

        <Flex
          direction={"column"}
          alignSelf={"center"}
          gap={4}
          p={2}
          color={"#2ED1F2"}
        >
          <Heading
            flex={1}
            fontFamily="'Orbitron', sans-serif"
            fontSize={{ base: 18, lg: "4xl" }}
            h={"fit-content"}
            color={"#2ED1F2"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Contato
          </Heading>
          <Link
            fontSize={{ base: 13, lg: 15 }}
            mx={"auto"}
            href="https://www.linkedin.com/in/andrewgadelha/"
            target="_blank"
            color={"#E109FF"}
          >
            LinkedIn
          </Link>
          <Link
            fontSize={{ base: 13, lg: 15 }}
            mx={"auto"}
            href="https://github.com/andrewgadelha"
            target="_blank"
            color={"#E109FF"}
          >
            Github
          </Link>
          <Text fontSize={{ base: 13, lg: 15 }} mx={"auto"}>
            andrewgadelha2408@gmail.com
          </Text>
        </Flex>

        <footer>
          <Flex direction={"column"} gap={5} borderTop={'0.5px solid gray'}  p={4}>
            <Text w={"fit-content"} mx={"auto"}>
              Andrew Gadelha 2025.
            </Text>
          </Flex>
        </footer>
      </Container>
    </Flex>
  );
}

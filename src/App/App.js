import React from "react"
import {FullPage, Slide} from "react-full-page"
import {
  Center,
  Image,
  HStack,
  Text,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react"
import {RiPlantLine, RiMapPin3Line, RiHandHeartLine} from "react-icons/ri"
import {motion} from "framer-motion"
import {Chrono} from "react-chrono"
import {
  Bounce,
  Flip,
  Fade,
  Hinge,
  Roll,
  Rotate,
  Slide as SlideNuevo,
  Zoom,
} from "react-awesome-reveal"

import imagen from "../assets/imagen2.png"
import imagen1 from "../assets/imagen3.jpeg"
import imagen2 from "../assets/crespo1.jpg"
import imagen3 from "../assets/uni2.jpg"
import chaucha from "../assets/chaucha.jpg"
import frutilla from "../assets/frutilla.jpg"
import morron from "../assets/morron.jpg"
import zanahoria from "../assets/zanahoria.jpg"

const data = [
  {
    title: "1995",
    cardTitle: (
      <Text fontFamily="monospace" fontSize="2xl">
        Pro huerta
      </Text>
    ),
    cardSubtitle: "Política alimentaria",
    cardDetailedText: (
      <Text fontFamily="monospace" fontSize="2xl">
        Dirigido a población urbana y rural vulnerable, se busca capacitar y que las familias
        generen sus propios alimentos.
      </Text>
    ),
  },

  {
    title: "2018",
    cardTitle: (
      <Text fontFamily="monospace" fontSize="2xl">
        Plan nacional de reducción de pérdidas y desperdicio de alimentos - Comer sin perder
      </Text>
    ),

    cardSubtitle: "Programas anuales",
    cardDetailedText: (
      <Text fontFamily="monospace" fontSize="2xl">
        Valoración de los alimentos, festejos responsables, evitar cocinar de más y reutilizar los
        sobrantes.
      </Text>
    ),
  },
  {
    title: "2020",
    cardTitle: (
      <Text fontFamily="monospace" fontSize="2xl">
        Actualidad
      </Text>
    ),

    cardSubtitle: "Argentina",
    cardDetailedText: (
      <Text fontFamily="monospace" fontSize="2xl">
        Pro huerta cumple 30 años de historia, siendo una de las políticas alimentarias más
        importantes.
      </Text>
    ),
  },
]

export default function App() {
  return (
    <div style={{width: "100%", backgroundColor: "lightblue", height: "100%"}}>
      <FullPage>
        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#F2F3DA",
              color: "#D97919",
            }}
          >
            <motion.div
              animate={{y: 0, opacity: 1}}
              initial={{y: -200, opacity: 0}}
              transition={{duration: 1}}
            >
              <HStack h={300}>
                <Text fontFamily="monospace" fontSize="9xl">
                  PRO-HUERTA
                </Text>
                <RiPlantLine style={{height: 200, width: 200, color: "#77C748"}} />
              </HStack>
            </motion.div>
          </Center>
        </Slide>

        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#93CF70",
              color: "#AC6423",
            }}
          >
            <HStack h={300}>
              <Text fontFamily="monospace" fontSize="7xl">
                Creado por el INTA y Ministerio de desarrollo social de la Nación
              </Text>
            </HStack>
          </Center>
        </Slide>
        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#F2F3DA",
              color: "#77C748",
            }}
          >
            <HStack h={300} />
            <div style={{width: "100%", height: "500px"}}>
              <Chrono items={data} mode="HORIZONTAL" />
            </div>
          </Center>
        </Slide>
        <Slide>
          <Center
            backgroundImage={imagen}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            style={{
              backgroundColor: "#93CF70",
              width: "100%",
              height: "100vh",

              color: "#AC6423",
            }}
          >
            <HStack h={300}>
              <Zoom>
                <List spacing={5}>
                  <ListItem>
                    <Text color="#FFF" fontFamily="monospace" fontSize="5xl">
                      Capacitación
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text color="#FFF" fontFamily="monospace" fontSize="5xl">
                      Semillas
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text color="#FFF" fontFamily="monospace" fontSize="5xl">
                      Asistencia y seguimiento
                    </Text>
                  </ListItem>
                </List>
              </Zoom>
            </HStack>
          </Center>
        </Slide>
        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#F2F3DA",
              color: "#77C748",
            }}
          >
            <List left={10} spacing={5} top={10}>
              <ListItem>
                <Text color="#77C748" fontFamily="monospace" fontSize="6xl">
                  HUERTA COMUNITARIA
                </Text>
              </ListItem>

              <ListItem>
                <Text color="#AC6423" fontFamily="monospace" fontSize="4xl">
                  Fortalece consumo consciente, saludable y con productos locales
                </Text>
              </ListItem>
            </List>
            <List left={60} spacing={5} top={10}>
              <ListItem>
                <Text color="#77C748" fontFamily="monospace" fontSize="6xl">
                  HUERTA ESCOLAR
                </Text>
              </ListItem>

              <ListItem>
                <Text color="#AC6423" fontFamily="monospace" fontSize="4xl">
                  Aprendizaje y mejora la relación con el ambiente
                </Text>
              </ListItem>
            </List>
          </Center>
        </Slide>
        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#93CF70",
              color: "#AC6423",
            }}
          >
            <HStack h={300}>
              <Text fontFamily="monospace" fontSize="7xl">
                Puntos de enfoque: Escala FIES
              </Text>
              <List spacing={5}>
                <Zoom>
                  <ListItem>
                    <Text color="#FFF" fontFamily="monospace" fontSize="5xl">
                      Hogar sin alimentos
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text color="#FFF" fontFamily="monospace" fontSize="5xl">
                      Poca variedad de alimentos
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text color="#FFF" fontFamily="monospace" fontSize="5xl">
                      Alimentos no nutritivos
                    </Text>
                  </ListItem>
                </Zoom>
              </List>
            </HStack>
          </Center>
        </Slide>

        <Slide>
          <Center
            position="relative"
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#F2F3DA",
              color: "#77C748",
            }}
          >
            <Image bottom={10} left={10} position="absolute" src={imagen2} />
            <Image position="absolute" right={10} src={imagen3} top={10} />
            <Text fontFamily="monospace" fontSize="4xl" left={750} position="absolute" top={500}>
              Huerta Agroecológica Crespo
            </Text>
            <Text
              bottom={200}
              fontFamily="monospace"
              fontSize="4xl"
              position="relative"
              right={350}
            >
              Universidad Adventista del Plata
            </Text>
          </Center>
        </Slide>
        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#93CF70",
              color: "#D1264D",
            }}
          >
            <Text fontFamily="monospace" fontSize="6xl">
              Nuestra huerta familiar
              <RiHandHeartLine style={{height: 100, width: 100, color: "#D1264D"}} />
            </Text>

            <Image bottom={10} left={10} position="relative" src={chaucha} />
            <Image bottom={150} left={20} position="relative" src={zanahoria} />
            <Image left={-20} position="relative" src={frutilla} top={200} />
            <Image bottom={10} left={-30} position="relative" src={morron} />
          </Center>
        </Slide>

        <Slide>
          <Center
            backgroundImage={imagen1}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#F2F3DA",
              color: "#FFF",
            }}
          >
            <HStack h={300}>
              <Fade>
                <Text fontFamily="monospace" fontSize="7xl">
                  Es una semilla que cada uno debe sembrar en el seno de su hogar y comunidad
                </Text>
              </Fade>
            </HStack>
          </Center>
        </Slide>
        <Slide>
          <Center
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#F2F3DA",
              color: "#77C748",
            }}
          >
            <VStack h={300}>
              <Text color="#AC6423" fontFamily="monospace" fontSize="3xl">
                Bibliografía:
              </Text>
              <Text fontFamily="monospace" fontSize="2xl">
                Municipalidad de Crespo,
                https://www.crespo.gob.ar/diez-familias-comenzaron-el-segundo-proyecto-de-huerta-agroecologica-en-crespo/
              </Text>
              <Text fontFamily="monospace" fontSize="2xl">
                Universidad Adventista del Plata,
                https://biblioteca.uap.edu.ar/2018/04/huerta-organica-comunitaria-2/
              </Text>
              <Text fontFamily="monospace" fontSize="2xl">
                INTA, Ministerio de Desarrollo Social y Agroindustria,
                https://inta.gob.ar/sites/default/files/huertas_escolares_y_comunitarias.pdf
              </Text>
              <Text fontFamily="monospace" fontSize="2xl">
                Figuras varias,
                https://www.quepasaweb.com.ar/wp-content/uploads/2020/08/huertas-caseras.jpg,
                https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/06/26/5fa91ffc9f64f.jpeg
              </Text>
            </VStack>
          </Center>
        </Slide>
      </FullPage>
    </div>
  )
}

import React, { useRef } from "react";
import {
   Grommet,
   Page,
   Header,
   Text,
   PageContent,
   Box,
   Avatar,
   Heading,
   Paragraph,
   Anchor,
   Button,
   Layer,
   TextInput,
   TextArea,
   ThumbsRating,
   Grid,
} from "grommet";
import {
   Reactjs,
   Js,
   Linkedin,
   Redo,
   Mail,
   Github,
   Send,
   Location,
   ChatOption,
} from "grommet-icons";
import theme from "./theme";
import { AccentSpan, StyledHeaderSpan, StyledSpan } from "./utils/StyledSpan";
import PostCardLocation from "./components/HelloFromPS";
import styled from "styled-components";
import ContactLayer from "./components/ContactLayer";
import ProjectsTable from "./components/ExperienceDataTable";
import DarkThemeSwitch from "./components/DarkThemeSwitch";
import { ToastProvider, useToast } from "./utils/ToastUtils";
import ContactGrid from "./components/ContactGrid";
import LocationDrop from "./components/LocationDrop";
import useMediaQuery from "./hooks/UseMediaQuery";
import TechnologyStack from "./components/TechnologyStack";

const AppContainer = styled.div`
   position: relative;
`;

const App = () => {
   const [contactOpen, setContactOpen] = React.useState(false);
   const [dark, setDark] = React.useState(true);

   // Location Drop
   const [locationDrop, setLocationDrop] = React.useState(false);
   const boxRef = useRef<any | null>(null);

   // Mobile page padding & sizing
   const { isMobile } = useMediaQuery();
   const mobilePad = isMobile ? "large" : "none";
   const mobileHeading = isMobile ? "large" : "medium";
   const mobileHeadingLevel = isMobile ? 2 : 3;

   // Dancing Easteregg
   const [dancing, setDancing] = React.useState(false);

   return (
      <Grommet full theme={theme} themeMode={dark ? "dark" : "light"}>
         <ToastProvider>
            {/* <AppContainer> */}
            <Header
               align="center"
               direction="row"
               flex={false}
               justify="between"
               gap="medium"
               pad="xsmall"
               sticky="scrollup"
               style={
                  dark
                     ? {
                           backdropFilter: "blur(5.5px)",
                           WebkitBackdropFilter: "blur(8.5px)",
                        }
                     : {
                           background: "rgba(255, 255, 255, 0.3)",
                           backdropFilter: "blur(5.5px)",
                           WebkitBackdropFilter: "blur(8.5px)",
                           border: "1px solid rgba(255, 255, 255, 0.18)",
                        }
               }
            >
               <Heading color="data-scientist" margin={{ left: "small", top: "none" }} size="small">
                  B.<AccentSpan>Chan</AccentSpan>
               </Heading>
               <DarkThemeSwitch dark={dark} setDark={setDark} />
            </Header>

            <Page kind="narrow">
               <PageContent pad={mobilePad} flex="grow">
                  <Box align="baseline" justify="between" direction="row">
                     <Box align="start" justify="center" gap="medium" wrap>
                        <Box
                           align="center"
                           justify="center"
                           direction="row"
                           gap="medium"
                           pad={{ horizontal: "large" }}
                        >
                           {/* TODO(Brennan): swap this placeholder for a real headshot */}
                           <Avatar
                              align="center"
                              flex={false}
                              justify="center"
                              overflow="hidden"
                              round="full"
                              size="2xl"
                              src="https://ui-avatars.com/api/?name=Brennan+Chan&background=1269cc&color=fff&size=256&bold=true"
                           />
                           <Box align="start" justify="start" fill>
                              <Heading margin="none">Brennan</Heading>
                              <Heading
                                 margin={{
                                    left: "medium",
                                    vertical: "none",
                                    top: "none",
                                    bottom: "none",
                                 }}
                              >
                                 Chan
                              </Heading>
                           </Box>
                        </Box>
                        <Box align="start" justify="between" wrap direction="column" gap="small">
                           <Paragraph
                              size="large"
                              margin={{ vertical: "xsmall" }}
                              color="text-paragraph"
                           >
                              Whats up, I'm a{" "}
                              <StyledSpan>Data-Scientist</StyledSpan> &{" "}
                              <StyledSpan>Statistician</StyledSpan>. When I'm not building
                              models, I'm probably{" "}
                              <StyledSpan>min-maxing a competitive Pokémon team</StyledSpan> or{" "}
                              <StyledSpan>hex-editing an old JRPG</StyledSpan>.
                           </Paragraph>
                           <Box
                              align="end"
                              justify="center"
                              direction="row"
                              gap="xsmall"
                              margin={{ right: "none" }}
                              onClick={() => setLocationDrop(true)}
                              ref={boxRef}
                              focusIndicator={false}
                              hoverIndicator
                              pad="xsmall"
                              round="xsmall"
                              border
                           >
                              <Location />
                              <Paragraph color="text-paragraph" margin="none">
                                 I'm in{" "}
                                 <Text weight="bold">
                                    <StyledSpan>Arlington, Texas</StyledSpan>
                                 </Text>{" "}
                                 <Text size="small">— headed to Berlin this fall</Text>
                              </Paragraph>
                           </Box>
                        </Box>
                        {isMobile && (
                           <Box
                              align="center"
                              justify="center"
                              flex
                              fill="horizontal"
                              margin={{ vertical: "small" }}
                              focusIndicator={false}
                           >
                              <Button
                                 primary
                                 icon={<ChatOption />}
                                 label="let's talk"
                                 onClick={() => setContactOpen(true)}
                              />
                           </Box>
                        )}
                     </Box>
                     {!isMobile && (
                        <Box align="center" justify="center" flex fill="horizontal">
                           <Anchor label="let's talk" onClick={() => setContactOpen(true)} />
                        </Box>
                     )}
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="medium"
                  >
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="medium"
                        >
                           Work
                        </Heading>

                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                        >
                           I'm a recent <StyledSpan>Baylor University</StyledSpan> grad
                           (Data Science &amp; Statistics), heading to{" "}
                           <StyledSpan>ESMT Berlin</StyledSpan> for grad school this fall. My
                           background spans <StyledSpan>medical AI research</StyledSpan>,{" "}
                           <StyledSpan>front-end web development</StyledSpan>, and{" "}
                           <StyledSpan>statistical modeling</StyledSpan> — at the University of
                           Colorado School of Medicine I built{" "}
                           <StyledSpan>computer-vision models</StyledSpan> to help predict
                           surgical actions in real time, and at CBORD I shipped front-end
                           features in Agile sprints. I like turning{" "}
                           <StyledSpan>messy data</StyledSpan> into models and interfaces that
                           actually help people.
                        </Paragraph>
                     </Box>
                  </Box>
                  <Heading level={mobileHeadingLevel} size="medium">
                     Experience
                  </Heading>
                  <ProjectsTable />
                  <TechnologyStack />

                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="medium"
                  >
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="medium"
                        >
                           Contact
                        </Heading>
                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                        >
                           Give me a shout, and we can make something cool happen. I'm usually quick
                           to respond.
                        </Paragraph>
                     </Box>
                     <ContactGrid setContactOpen={setContactOpen} />
                  </Box>
               </PageContent>
               {contactOpen && <ContactLayer setContactOpen={setContactOpen} />}
               {locationDrop && (
                  <LocationDrop
                     setLocationDrop={setLocationDrop}
                     locationDrop={locationDrop}
                     boxRef={boxRef}
                  />
               )}
            </Page>
            {/* <PostCardLocation /> */}
            {/* </AppContainer> */}
         </ToastProvider>
      </Grommet>
   );
};

export default App;

import React from "react";
import { Grid, Box, Text, AnchorType, Anchor } from "grommet";
import { Linkedin, Mail, Github } from "grommet-icons";
import { useToast } from "../utils/ToastUtils";
function ContactGrid({ setContactOpen }) {
   const { showToast } = useToast();

   const handleToastNotif = (alertLevel, label, description, duration, actions) => {
      showToast({
         alertLevel: alertLevel,
         label: label,
         description: description,
         duration: duration,
         actions: actions,
      });
   };
   return (
      <Grid fill="horizontal" gap="small" columns="370px" margin={{ bottom: "medium" }}>
         <Box
            align="center"
            justify="between"
            width={{ min: "350px", max: "fill" }}
            height="xxsmall"
            background={{ color: "graph-3", opacity: "strong" }}
            pad="small"
            direction="row"
            gap="small"
            round="xsmall"
            onClick={() => {
               // TODO(Brennan): confirm this is your real LinkedIn URL
               window.open("https://www.linkedin.com/in/brennan-chan-3a434b208/", "_blank");
               handleToastNotif("normal", "Redirecting...", "Taking you to LinkedIn!", 5000, [
                  {
                     onClick: () => {},
                     label: "Let's go!",
                  },
               ]);
            }}
         >
            <Box align="center" justify="center" direction="row" gap="small">
               <Linkedin />
               <Text weight="normal" size="large">
                  Brennan Chan
               </Text>
            </Box>
         </Box>
         <Box
            align="center"
            justify="between"
            width={{ min: "350px", max: "fill" }}
            height="xxsmall"
            background={{ color: "neutral-4", opacity: "strong" }}
            pad="small"
            direction="row"
            gap="small"
            round="xsmall"
            onClick={() => setContactOpen(true)}
         >
            <Box align="center" justify="center" direction="row" gap="small">
               <Mail />
               <Text weight="normal" size="large">
                  brennanhonorio@gmail.com
               </Text>
            </Box>
         </Box>
         <Box
            align="center"
            justify="between"
            width={{ min: "350px", max: "fill" }}
            height="xxsmall"
            background={{ color: "dark-2", opacity: "strong" }}
            pad="small"
            direction="row"
            gap="small"
            round="xsmall"
            onClick={() => {
               window.open("https://www.github.com/Brennan-Chan", "_blank");
               handleToastNotif("normal", "Redirecting...", "Taking you to GitHub!", 5000, [
                  {
                     onClick: () => {},
                     label: "Let's go!",
                  },
               ]);
            }}
         >
            <Box align="center" justify="center" direction="row" gap="small">
               <Github />
               <Text weight="normal" size="large">
                  @Brennan-Chan
               </Text>
            </Box>
         </Box>
      </Grid>
   );
}

export default ContactGrid;

import React, { useState } from "react";
import { Box, Drop, Grid, Text } from "grommet";
import { Python, Javascript, CSS, Git, Java, MongoDB } from "../utils/TechnologySVGList";
import styled from "styled-components";

export type TechIconProps = {
   name: string;
   icon: JSX.Element;
   isGolden: boolean;
};

export const TechIcon = styled.div`
   width: 35px;
   height: 35px;

   svg {
      width: 100%;
      height: 100%;
      filter: ${(props) =>
         props.isGolden
            ? "sepia(50%) drop-shadow(0 0 3px #D4AF37) drop-shadow(0 0 2px #D4AF37)"
            : props.isFiltered
            ? "grayscale(25%)"
            : "none"};
   }
`;

// Languages/tools that don't have a logo asset in TechnologySVGList yet, shown as plain
// tags instead of icons: SQL (Oracle), HTML, PHP, R, C++, Assembly (x86), SAS, AWS, GCC,
// Azure, PyTorch, TensorFlow, Keras, OpenCV.
const otherSkills = [
   "SQL (Oracle)",
   "HTML",
   "PHP",
   "R",
   "C++",
   "Assembly (x86)",
   "SAS",
   "AWS",
   "GCC",
   "Azure",
   "PyTorch",
   "TensorFlow",
   "Keras",
   "OpenCV",
];

function TechnologyStack() {
   const [isFiltered, setIsFiltered] = useState(true);
   const [hoveredIcon, setHoveredIcon] = useState<TechIconProps | null>(null);
   const [hoverRef, setHoverRef] = useState<object | undefined>(undefined);
   const [showDrop, setShowDrop] = useState(false);

   const handleMouseOver = (e, icon) => {
      setHoverRef(e.currentTarget);
      setHoveredIcon(icon);
   };

   const handleMouseOut = () => {
      setHoverRef(undefined);
      setHoveredIcon(null);
   };

   const iconList = [
      { name: "Python", icon: <Python />, isGolden: true },
      { name: "Java", icon: <Java />, isGolden: true },
      { name: "Git", icon: <Git />, isGolden: true },
      { name: "JavaScript", icon: <Javascript /> },
      { name: "CSS", icon: <CSS /> },
      { name: "MongoDB", icon: <MongoDB /> },
   ];

   React.useEffect(() => {
      if (hoveredIcon) {
         setShowDrop(true);
      } else {
         setShowDrop(false);
      }
   }, [hoveredIcon]);

   return (
      <Box gap="small">
         <Grid columns={{ size: "35px", count: "fit" }} gap="xsmall">
            {iconList.map((item, i) => (
               <Box onMouseOver={(e) => handleMouseOver(e, item)} onMouseOut={handleMouseOut}>
                  <TechIcon key={i} isGolden={item.isGolden} isFiltered={isFiltered}>
                     {item.icon}
                  </TechIcon>
               </Box>
            ))}
            {showDrop && hoveredIcon && (
               <Drop align={{ bottom: "top" }} target={hoverRef} plain overflow="hidden">
                  <Box
                     pad="xsmall"
                     background="dark-3"
                     round={{ size: "xsmall" }}
                     margin="xsmall"
                     style={{
                        background: "rgba(139, 139, 139, 0.95)",
                        backdropFilter: "blur(5.5px)",
                        WebkitBackdropFilter: "blur(8.5px)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                     }}
                  >
                     <Box direction="column" align="center">
                        <Text weight="bold">{hoveredIcon.name}</Text>
                        {hoveredIcon.isGolden ? <Text>Skilled</Text> : <Text>Proficient</Text>}
                     </Box>
                  </Box>
               </Drop>
            )}
         </Grid>
         <Box direction="row" gap="xsmall" wrap>
            {otherSkills.map((skill) => (
               <Box
                  key={skill}
                  pad={{ horizontal: "xsmall", vertical: "2px" }}
                  round="xsmall"
                  border={{ color: "border", size: "1px" }}
               >
                  <Text size="small" color="text-paragraph">
                     {skill}
                  </Text>
               </Box>
            ))}
         </Box>
      </Box>
   );
}

export default TechnologyStack;

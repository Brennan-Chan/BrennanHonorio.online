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

// Languages, tools, and practices that don't have a logo asset in TechnologySVGList yet
// (or aren't a "language" at all), shown as plain tags instead of icons. Mostly pulled
// straight from the CBORD and CU Anschutz internships, plus coursework/skills.
// Each has a level - "skilled" > "proficient" (default) > "familiar" - styled below.
type SkillLevel = "skilled" | "proficient" | "familiar";
type OtherSkill = { name: string; level?: SkillLevel };

const otherSkills: OtherSkill[] = [
   { name: "SQL (Oracle)", level: "skilled" },
   { name: "HTML" },
   { name: "PHP" },
   { name: "R", level: "skilled" },
   { name: "C++", level: "skilled" },
   { name: "Assembly (x86)", level: "proficient" },
   { name: "SAS" },
   { name: "AWS" },
   { name: "GCC" },
   { name: "Azure" },
   { name: "PyTorch" },
   { name: "TensorFlow" },
   { name: "Keras" },
   { name: "OpenCV" },
   { name: "Figma (UI/UX)" },
   { name: "Agile/Scrum" },
   { name: "Webhooks" },
   { name: "Computer Vision" },
   { name: "Predictive Modeling" },
   { name: "Statistical Modeling" },
   { name: "Database Management" },
   { name: "OOP" },
   // Data visualization
   { name: "Tableau", level: "familiar" },
   { name: "Matplotlib" },
   { name: "Seaborn" },
   { name: "Power BI" },
];

const skillLevelStyle: Record<
   SkillLevel,
   { borderColor: string; borderStyle: "solid" | "dashed"; textColor: string; weight: "bold" | "normal" }
> = {
   skilled: {
      borderColor: "data-scientist",
      borderStyle: "solid",
      textColor: "text-strong",
      weight: "bold",
   },
   proficient: {
      borderColor: "border",
      borderStyle: "solid",
      textColor: "text-paragraph",
      weight: "normal",
   },
   familiar: {
      borderColor: "text-xweak",
      borderStyle: "dashed",
      textColor: "text-xweak",
      weight: "normal",
   },
};

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
         <Box direction="row" gap="xsmall" wrap style={{ rowGap: "12px" }}>
            {otherSkills.map((skill) => {
               const tier = skillLevelStyle[skill.level ?? "proficient"];
               return (
                  <Box
                     key={skill.name}
                     pad={{ horizontal: "xsmall", vertical: "2px" }}
                     round="xsmall"
                     border={{ color: tier.borderColor, size: "1px", style: tier.borderStyle }}
                  >
                     <Text size="small" color={tier.textColor} weight={tier.weight}>
                        {skill.name}
                     </Text>
                  </Box>
               );
            })}
         </Box>
      </Box>
   );
}

export default TechnologyStack;

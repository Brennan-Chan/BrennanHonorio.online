import React, { useState } from "react";
import {
   Box,
   DataTable,
   Text,
   Layer,
   Heading,
   Drop,
   Grid,
   Paragraph,
   Anchor,
   Image,
} from "grommet";
import { Link, Calendar, List, Technology, Menu, Grommet } from "grommet-icons";
import styled from "styled-components";

import {
   Kotlin,
   Lua,
   Python,
   Typescript,
   Javascript,
   CSS,
   CSharp,
   SQLite,
   Git,
   Java,
   Swift,
   NodeJS,
   Heroku,
   React as ReactIcon,
   XCode,
   AndroidStudio,
   Express,
   MongoDB,
   Firebase,
} from "../../utils/TechnologySVGList";
import { TechIcon, TechIconProps } from ".././TechnologyStack";
import useMediaQuery from "../../hooks/UseMediaQuery";
import { projects } from "../../utils/Projects";
import { BorderType } from "grommet/utils";
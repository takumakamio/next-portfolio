import Link from "next/link";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "black" }}>
          <DiCssdeck size="4rem" /> <span>Takuma Kamio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Portfolio</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skill</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/takumakamio">
        <AiOutlineGithub size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

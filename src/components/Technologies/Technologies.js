import React from "react";
import { DiReact, DiZend, DiRuby } from "react-icons/di";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNextDotJs,
  SiJquery,
  SiMaterialUi,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNginx,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Skill</SectionTitle>

    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>フロントエンド</ListTitle>
          <picture>
            <FaReact size="2.5rem" />
            <SiNextDotJs size="2.5rem" style={{ marginLeft: "10px" }} />
            <SiTypescript size="2.5rem" style={{ marginLeft: "10px" }} />
            <SiJquery size="2.5rem" style={{ marginLeft: "10px" }} />
            <SiMaterialUi size="2.5rem" style={{ marginLeft: "10px" }} />
          </picture>
          <ListParagraph>
            React <br />
            Next.js <br />
            TypeScript <br />
            jQuery <br />
            Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>バックエンド</ListTitle>
          <picture>
            <DiRuby size="2.5rem" />
            <FaNodeJs size="2.5rem" style={{ marginLeft: "10px" }} />
            <SiMysql size="2.5rem" style={{ marginLeft: "10px" }} />
            <SiMongodb size="2.5rem" style={{ marginLeft: "10px" }} />
          </picture>
          <ListParagraph>
            Ruby on Rails <br />
            Node.js / Express.js
            <br />
            MySQL <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>インフラ</ListTitle>
          <picture>
            <FaAws size="2.5rem" />
            <SiFirebase size="2.5rem" style={{ marginLeft: "10px" }} />
            <SiNginx size="2.5rem" style={{ marginLeft: "10px" }} />
          </picture>
          <ListParagraph>
            AWS <br />
            Firebase
            <br />
            Nginx
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

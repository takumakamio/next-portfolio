import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Introduction, LeftSection } from "./IntroStyles";

const Intro = (props) => (
  <>
    <Section>
      <LeftSection>
        <SectionTitle main center>
          自己紹介
        </SectionTitle>
        <SectionText style={{ color: "#555555", lineHeight: "2" }}>
          <Introduction>
            <li>名前: 神尾 拓馬</li>
            <li>出身: 兵庫県宝塚市</li>
            <li>在居: 東京都</li>
            <li>
              職歴:
              大学卒業後、設備系施工管理に従事、その後オーストラリアにてワイナリーや養鶏場で働いたのち、国際物流フォワーダーとして勤務
            </li>
            <li>
              趣味: 高校から始めたテニス、バイクでのツーリングでどこでも行きます
            </li>
          </Introduction>
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Intro;

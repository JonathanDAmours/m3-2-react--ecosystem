import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin: 0 30px;
  position: relative;
`;

const Text = styled.p`
  font-family: sans-serif;
`;

const Bold = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  margin-left: 6px;
`;

const Div = styled.div`
  display: flex;
`;

const About = (props) => {
  return (
    <Section>
      <Div>
        <Text>Fruit emporium is founded on a very simple principle: </Text>
        <Bold>Fruit is good.</Bold>
      </Div>
      <Text>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </Text>
    </Section>
  );
};

export default About;

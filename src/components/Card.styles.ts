import styled from "styled-components";

export const Wrraper = styled.div<{ align: "center" | "left" | "right" }>`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 16px;
  text-align: ${(props) => props.align};
`;

export const Title = styled.h2`
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

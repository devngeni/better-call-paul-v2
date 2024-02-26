import styled from "styled-components";
interface TitleProperties {
  text?: string;
  color?: string;
  size?: string;
  $weight?: string;
  fontFamily?: string;
  otherTextStyles?: React.CSSProperties;
}

const TitleWrapper = styled.h1<TitleProperties>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  font-weight: ${(props) => props.$weight};
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
`;

interface TitleProps extends TitleProperties {
  children?: React.ReactNode;
}

function Title({
  color,
  size,
  $weight,
  text,
  fontFamily,
  children,
  otherTextStyles,
}: TitleProps) {
  return (
    <TitleWrapper
      style={{
        color,
        fontSize: size,
        fontWeight: $weight,
        fontFamily: fontFamily,
        ...otherTextStyles,
      }}
    >
      {text || children}
    </TitleWrapper>
  );
}

export default Title;

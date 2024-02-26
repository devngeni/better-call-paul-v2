import styled from "styled-components";
interface TextProperties {
  text?: string;
  color?: string;
  size?: string;
  $weight?: string;
  onClick?: () => void;
  fontFamily?: string;
}
const TextWrapper = styled.h1<TextProperties>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: ${(props) => props.$weight};
  line-height: normal;
`;
interface TextProps extends TextProperties {
  children?: React.ReactNode;
}
function Text({
  color,
  size,
  $weight,
  children,
  text,
  onClick,
  fontFamily,
}: TextProps) {
  return (
    <TextWrapper
      color={color}
      size={size}
      $weight={$weight}
      fontFamily={fontFamily}
    >
      {text || children}
    </TextWrapper>
  );
}

export default Text;

import Box, { BoxProps } from "components/Box";

type TitleBoxProps = BoxProps & {
  title: string;
};

const TitleBox = ({ theme, title }: TitleBoxProps) => {
  return (
    <Box theme={theme}>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h2>{title}</h2>
      </div>
    </Box>
  );
};

export default TitleBox;

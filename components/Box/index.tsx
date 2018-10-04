import classNames from "classnames";

import Dot from "./components/Dot";

import styles from "./styles.scss";

export enum BOX_THEMES {
  white = "white-theme",
  gold = "gold-theme",
  lightgold = "lightgold-theme"
}

export type BoxProps = {
  theme?: valueof<BOX_THEMES>;
  children?: any;
};

const Box = ({ theme = BOX_THEMES.white, children }: BoxProps) => {
  return (
    <div className={classNames(styles.Box, styles[theme])}>
      <Dot theme={theme} />
      {children}
      <Dot theme={theme} />
    </div>
  );
};

export default Box;

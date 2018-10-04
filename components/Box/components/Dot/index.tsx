import classNames from "classnames";

import { BOX_THEMES } from "components/Box";
import styles from "./styles.scss";

type DotProps = {
  theme?: valueof<BOX_THEMES>;
  children?: any;
};

const Dot = ({ theme }: DotProps) => {
  return <div className={classNames(styles.Dot, styles[theme])} />;
};

export default Dot;

import { MovieTypeEnum } from "../../types/enums/MovieType.enum";
import { MovieTypeRuEnum } from "../../types/enums/MovieTypeRu.enum";
import styles from "../../styles/components/shared/TabItem.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

interface ITabItemProps {
  type: MovieTypeEnum,
  active: boolean,
  link: string
}

function TabItem({ type, active, link }: ITabItemProps) {
  const movieTypeRu = MovieTypeRuEnum;
  return (
    <Link href={link} className={cx(styles.tabWrapper, { active: active })}>
      {movieTypeRu[type]}
    </Link>
  );
}

export default TabItem;
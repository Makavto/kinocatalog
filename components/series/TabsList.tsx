import { MovieTypeEnum } from "../../types/enums/MovieType.enum";
import TabItem from "./TabItem";

interface ITabsListProps {
  active: MovieTypeEnum
}

function TabsList({ active }: ITabsListProps) {

  return (
    <div className="d-flex justify-content-between">
      <TabItem active={MovieTypeEnum.TV_SERIES == active} type={MovieTypeEnum.TV_SERIES} link='/series' />
      <TabItem active={MovieTypeEnum.MINI_SERIES == active} type={MovieTypeEnum.MINI_SERIES} link='/series/mini' />
      <TabItem active={MovieTypeEnum.TV_SHOW == active} type={MovieTypeEnum.TV_SHOW} link='/series/tv' />
    </div>
  );
}

export default TabsList;
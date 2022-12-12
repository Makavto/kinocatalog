import styles from "../../styles/components/shared/SearchComponent.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

interface ISearch {
  search: string;
}

function SearchComponent() {
  const {register, handleSubmit} = useForm<ISearch>();
  const router = useRouter();
  const onSearch: SubmitHandler<ISearch> = ({search}: ISearch) => {
    router.push(`/search/${search}`)
  }
  return (
    <div className={styles.searchBlock}>
      <input {...register("search")} type="text" placeholder="Поиск по названию" />
      <button onClick={handleSubmit(onSearch)} className='appButton'>Поиск</button>
    </div>
  );
}

export default SearchComponent;
import React from "react";
import Menu from "./Menu";
import styles from "../styles/components/Layout.module.scss";
import Scrollbar from 'smooth-scrollbar';
import { useRouter } from "next/router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { ScrollStatus } from "smooth-scrollbar/interfaces";

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  const router = useRouter();

  const {paginate} = useTypedSelector(state => state.scroll);

  const [pag, setPag] = React.useState(false);

  const {setPaginate} = useActions();

  let scroll: Scrollbar | null = null;

  const listener = (status: ScrollStatus) => {
    if (status.limit.y - status.offset.y < 100) {
      setPaginate(true);
      setPag(true)
      console.log(pag, paginate)
    }
  }

  React.useEffect(() => {
    scroll = Scrollbar.init(document.getElementById('scrollbar')!);
    scroll.track.xAxis.element.remove();
    return () => {
      if (scroll)
        scroll.destroy();
    }
  }, [router.pathname]);

  React.useEffect(() => {
    scroll?.addListener(listener)
    return () => {
      console.log('destroy')
      scroll?.removeListener(listener)
    }
  }, [paginate])

  
  return (
    <div className={styles.baseLayout}>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
      <div id="scrollbar" className={styles.pageWrapper}>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
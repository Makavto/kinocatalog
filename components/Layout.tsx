import React from "react";
import Menu from "./Menu";
import styles from "../styles/components/Layout.module.scss";
import Scrollbar from 'smooth-scrollbar';
import { useRouter } from "next/router";
import { DisableScrollPlugin } from "../core/helpers/disableScroll.helper";

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  const router = useRouter();

  React.useEffect(() => {
    Scrollbar.use(DisableScrollPlugin);
    let scroll = Scrollbar.init(
      document.getElementById('scrollbar')!,
      {
        plugins: {
          disableScroll: {
            direction: 'x'
          }
        }
      }  
    );
    scroll.track.xAxis.element.remove();
    return () => {
      if (scroll)
        scroll.destroy();
    }
  }, [router.pathname]);
  
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
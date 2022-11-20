import React from "react";
import Menu from "./Menu";
import styles from "../styles/components/Layout.module.scss";
import Scrollbar from 'smooth-scrollbar';

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  React.useEffect(() => {
    const scroll = Scrollbar.init(document.getElementById('scrollbar')!);
    scroll.track.xAxis.element.remove();
    return () => {
      if (scroll)
        scroll.destroy();
    }
  }, [])
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
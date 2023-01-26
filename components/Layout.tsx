import React from "react";
import Menu from "./Menu";
import styles from "../styles/components/Layout.module.scss";
import Scrollbar from 'smooth-scrollbar';
import { Router, useRouter } from "next/router";
import { DisableScrollPlugin } from "../core/helpers/disableScroll.helper";
import Loader from "./shared/Loader";

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

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  
  return (
    <div className={styles.baseLayout}>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
      <div id="scrollbar" className={styles.pageWrapper}>
        <div>
          {
            loading
            ? <div className={styles.loading}>
                <Loader />
              </div>
            : <main>
                {children}
              </main>
          }
        </div>
      </div>
    </div>
  )
}
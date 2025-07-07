import { ReactNode, useState } from "react";
import clsx from "clsx";
import Button from "react-bootstrap/Button";
import { List } from "react-bootstrap-icons";
import Sidebar from "@/components/Sidebar";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className={styles.mainContainer}>
      {
        <Button
          className={styles.menuIcon}
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <List />
        </Button>
      }
      <div className={styles.container}>
        <Sidebar
          onClose={() => setIsSidebarOpen(false)}
          className={clsx(
            styles.sidebar,
            isSidebarOpen && styles["sidebar--open"]
          )}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}

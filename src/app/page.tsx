"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "src/app/page.module.css";
import { AppShell, Container, Header, Title } from "@mantine/core";
import Response from "../components/Response";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            {/* Header content */}
            <Title order={2} align="center">
              AMDちゃんねる
            </Title>
          </Header>
        }
      >
        {/* Your application here */}
        <Container size="md" px="xs" className={styles.container}>
          <Response />
          <Response />
          <Response />
        </Container>
      </AppShell>
    </main>
  );
}

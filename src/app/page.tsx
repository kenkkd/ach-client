"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "src/app/page.module.css";
import {
  AppShell,
  Button,
  Container,
  Group,
  Header,
  Navbar,
  Title,
} from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            {/* Header content */}
            <Title order={2}>AMDちゃんねる</Title>
          </Header>
        }
      >
        {/* Your application here */}
        <Container size="xs" px="xs">
          <Group></Group>
        </Container>
      </AppShell>
    </main>
  );
}

"use client";
import { Inter } from "next/font/google";
import styles from "src/app/page.module.css";
import {
  AppShell,
  Button,
  Container,
  Group,
  Header,
  Space,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
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
          <Container size="md" px="xs" className={styles.formcontainer}>
            <TextInput
              placeholder="名無しさん@AMDlabです"
              label="名前"
              withAsterisk
            />
            <Space h="lg" />
            <Textarea placeholder="コメント" label="コメント" withAsterisk />
            <Space h="lg" />
            <Group position="right">
              <Button color="violet">送信</Button>
            </Group>
          </Container>
        </Container>
      </AppShell>
    </main>
  );
}

"use client";
import styles from "src/app/page.module.css";
import { Container, Group, Text } from "@mantine/core";

export default function Response() {
  return (
    <Container className={styles.column}>
      <Group className={styles.title}>
        <Text fw={700}>001</Text>
        <Text fw={700}>名無しさん@AMDlabです</Text>
        <Text fw={700}>2023/01/01 11:59:00</Text>
        <Text>ID:QnDZbbVm0</Text>
      </Group>
      <Text>
        ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。ダミーテキストが入ってますんで。
      </Text>
    </Container>
  );
}

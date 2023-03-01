"use client";
import styles from "src/app/page.module.css";
import {
  Button,
  Container,
  Group,
  Space,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";

export default function Response() {
  return (
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
  );
}

import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

interface TestInstructionsProps {
  onCloseTestInstructions: () => void;
}

export default function TestInstructions(props: TestInstructionsProps) {
  return (
    <Flex
      h="full"
      px={4}
      direction="column"
      gap={8}
    >
      <Heading>高考青春复盘测试</Heading>
      <Flex
        direction="column"
        gap={2}
      >
        <Text>
          2026年高考刚刚落幕。花5分钟测测你当下的精神状态，看看在生活这个草台班子里，你究竟是扛下所有的&quot;不死牛马&quot;，还是果断掀桌的&quot;一代悍匪&quot;。
        </Text>
        <UnorderedList spacing={2}>
          <ListItem>
            这些问题没有正确答案，凭直觉选择。
          </ListItem>
          <ListItem>
            快速回答，不要过度分析。
          </ListItem>
          <ListItem>
            根据&quot;你实际的情况&quot;回答，而不是&quot;你希望别人如何看待你&quot;。
          </ListItem>
        </UnorderedList>
      </Flex>
      <Button
        w="min-content"
        colorScheme="primary"
        alignSelf="flex-end"
        onClick={props.onCloseTestInstructions}
      >
        开始测试
      </Button>
    </Flex>
  );
}

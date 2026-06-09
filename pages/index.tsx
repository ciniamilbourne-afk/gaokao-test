import Link from "next/link";
import { Heading, Text, Highlight, Flex, Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

import MainLayout from "../components/layouts/main-layout";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <Flex
          position="relative"
          w={{
            base: "full",
            lg: "50%",
          }}
          alignSelf="center"
          px={4}
          pt={20}
          gap={8}
          h="calc(100vh - 80px)"
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          zIndex={1}
        >
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
          >
            <Highlight
              query="高考青春复盘"
              styles={{
                py: 1,
                px: 4,
                rounded: "full",
                bg: "primary.500",
                color: "white",
              }}
            >
              参加 高考青春复盘测试 
            </Highlight>
          </Heading>
          <Text
            fontSize="xl"
            align="center"
          >
            2026 年高考刚刚落幕。看着热搜上被数学新题型逼疯的应届生，你是不是暗自庆幸自己早生了几年？但摸着良心讲，成年人的世界，真的比当年那张理综卷子容易吗？
          </Text>
          <Text
            fontSize="lg"
            align="center"
            color="gray.600"
          >
            假如时光倒流，让你带着现在的记忆重被塞回高三考场，你会交出一份怎样的答卷？
          </Text>
          <Text
            fontSize="lg"
            align="center"
            color="gray.600"
          >
            请预留 8 - 10 分钟，给自己一场直击灵魂的青春复盘。测测你从当年的考场走到如今的社会，究竟进化出了怎样的人格状态：是练就了物理防御的&quot;不死牛马&quot;，还是蜕变成了敢于掀桌的&quot;一代悍匪&quot;？
          </Text>
          <Text
            fontSize="md"
            align="center"
            color="gray.500"
            fontStyle="italic"
          >
            生活没有标准答案。点击开始，重新确认现在的自己。
          </Text>
          <Link href="/test">
            <Button
              w="min-content"
              colorScheme="primary"
              variant="solid"
              rightIcon={<FiArrowRight size={20} />}
            >
              开始测试
            </Button>
          </Link>
        </Flex>
        <Image
          alt="illustration"
          src={`/images/home-bottom.png`}
          width={100}
          height={100}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "600px",
            height: "auto",
          }}
        />
      </MainLayout>
    </>
  );
}

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
            2026年高考刚刚落下帷幕。花3分钟测测你当下的精神状态，看看在生活这个草台班子里，你究竟是扛下所有的&quot;不死牛马&quot;，还是果断掀桌的&quot;一代悍匪&quot;。
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

import { Flex, Text, Heading } from "@chakra-ui/react";

import { TestResult } from "../../lib/personality-test";

interface TestResultStatsProps {
  testResult: TestResult;
}

export default function TestResultStats(props: TestResultStatsProps) {
  const { testScores } = props.testResult;

  const stats = [
    { label: "隐忍秩序 (T1)", value: testScores.t1, color: "blue" },
    { label: "破局反叛 (T2)", value: testScores.t2, color: "red" },
    { label: "佛系松弛 (T3)", value: testScores.t3, color: "green" },
    { label: "感性内耗 (T4)", value: testScores.t4, color: "purple" },
    { label: "真题得分 (Y)", value: testScores.y, color: "orange" },
  ];

  const maxScore = Math.max(testScores.t1, testScores.t2, testScores.t3, testScores.t4);

  return (
    <Flex
      my={4}
      mx={{ base: 0, lg: 4 }}
      w={{
        base: "full",
        lg: "25%",
      }}
      h="min-content"
      p={2}
      gap={4}
      top={5}
      direction="column"
      pos={{
        base: "static",
        lg: "sticky",
      }}
      alignSelf="flex-start"
    >
      <Heading
        as="h1"
        textAlign="center"
        fontSize="lg"
      >
        你的得分分布
      </Heading>
      {stats.map((stat, index) => (
        <Flex
          key={index}
          p={2}
          rounded="md"
          justifyContent="space-between"
          alignItems="center"
          bg={`${stat.color}.500`}
        >
          <Text
            fontWeight="semibold"
            color="white"
          >
            {stat.label}
          </Text>
          <Flex
            py={1}
            px={2}
            gap={2}
            rounded="md"
            justifyContent="space-between"
            bg="white"
          >
            <Text fontWeight="semibold">
              {stat.value}分
            </Text>
            {stat.value === maxScore && stat.label !== "真题得分 (Y)" && (
              <Text fontSize="xs" color="red.500"> dominant</Text>
            )}
          </Flex>
        </Flex>
      ))}
      <Text fontSize="sm" color="gray.500" textAlign="center">
        身份锚点: {testScores.z === "young" ? "年轻态" : "社会人"}
      </Text>
    </Flex>
  );
}

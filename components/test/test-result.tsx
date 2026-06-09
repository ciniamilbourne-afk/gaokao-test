import Image from "next/image";
import {
  Flex,
  Heading,
  Highlight,
  Text,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  UnorderedList,
  ListItem,
  Box,
  Button,
  Divider,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { FiShare2, FiRotateCcw } from "react-icons/fi";
import { useRouter } from "next/router";

import ShareCard from "./share-card";

import {
  TestResult as ITestResult,
  getPersonalityClassGroupByType,
} from "../../lib/personality-test";

interface TestResultProps {
  testResult: ITestResult;
}

export default function TestResult(props: TestResultProps) {
  const router = useRouter();
  const personalityClassGroup = getPersonalityClassGroupByType(
    props.testResult.resultType
  );

  return (
    <Flex
      my={4}
      w={{
        base: "full",
        lg: "50%",
      }}
      h="full"
      px={8}
      gap={4}
      alignItems="center"
      direction="column"
    >
      {/* 结果标题 */}
      <Flex direction="column" gap={4} alignItems="center">
        <Tag size="lg" colorScheme="primary" variant="solid">
          <TagLabel>{personalityClassGroup.name}</TagLabel>
        </Tag>
        <Heading as="h1" textAlign="center">
          <Highlight
            query={personalityClassGroup.type}
            styles={{ color: "primary.500" }}
          >
            {personalityClassGroup.nameDescription}
          </Highlight>
        </Heading>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          人物图腾：{personalityClassGroup.epithet}
        </Text>
      </Flex>

      <Image
        alt="illustration"
        src={`/images/characters/${personalityClassGroup.type}.png`}
        width={200}
        height={200}
        style={{ borderRadius: "12px" }}
      />

      <Divider />

      {/* 测试结果信件 */}
      <Box bg="gray.50" p={6} borderRadius="lg" w="full">
        <Text fontSize="md" lineHeight="tall">
          {personalityClassGroup.letter}
        </Text>
      </Box>

      {/* 高考专属共鸣 */}
      <Box bg="primary.50" p={6} borderRadius="lg" w="full">
        <Text fontWeight="bold" mb={2}>
          📌 【高考日专属共鸣】
        </Text>
        <Text fontSize="md">{personalityClassGroup.gaokaoEcho}</Text>
      </Box>

      <Divider />

      <Heading
        scrollMarginTop={8}
        id="description"
        as="h2"
        my={8}
        fontSize="xl"
        textAlign="center"
      >
        {personalityClassGroup.epithet}
      </Heading>
      {personalityClassGroup.description
        .split(/\.\n+/g)
        .map((description) =>
          description.endsWith(".") ? description : `${description}.`
        )
        .map((description, index) => (
          <Text key={index} textAlign="justify">
            {`${description}`}
          </Text>
        ))}

      <Heading
        scrollMarginTop={8}
        id="jungian-functional-preference-ordering"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        核心特质排序
      </Heading>
      <Table>
        <Tbody>
          <Tr>
            <Th>主导特质</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.dominant}
            </Td>
          </Tr>
          <Tr>
            <Th>辅助特质</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.auxiliary}
            </Td>
          </Tr>
          <Tr>
            <Th>第三特质</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.tertiary}
            </Td>
          </Tr>
          <Tr>
            <Th>潜在特质</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.inferior}
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Heading
        scrollMarginTop={8}
        id="general-traits"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        {`${personalityClassGroup.name} 总体特质`}
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.generalTraits.map((trait, index) => (
          <ListItem my={2} key={index} textAlign="justify">
            {trait}
          </ListItem>
        ))}
      </UnorderedList>

      <Heading
        scrollMarginTop={8}
        id="relationship-strengths"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        人际关系优点
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.relationshipStrengths.map(
          (relationshipStrength, index) => (
            <ListItem my={2} key={index} textAlign="justify">
              {relationshipStrength}
            </ListItem>
          )
        )}
      </UnorderedList>

      <Heading
        scrollMarginTop={8}
        id="relationship-weaknesses"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        人际关系不足
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.relationshipWeaknesses.map(
          (relationshipWeakness, index) => (
            <ListItem my={2} key={index} textAlign="justify">
              {relationshipWeakness}
            </ListItem>
          )
        )}
      </UnorderedList>

      <Heading
        scrollMarginTop={8}
        id="success-definition"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        成功定义
      </Heading>
      {personalityClassGroup.successDefinition
        .split(/\.\n+/g)
        .map((successDefinition) =>
          successDefinition.endsWith(".")
            ? successDefinition
            : `${successDefinition}.`
        )
        .map((successDefinition, index) => (
          <Text key={index} textAlign="justify">
            {`${successDefinition}`}
          </Text>
        ))}

      <Heading
        scrollMarginTop={8}
        id="strengths"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        优势
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.strengths.map((strength, index) => (
          <ListItem my={2} key={index} textAlign="justify">
            {strength}
          </ListItem>
        ))}
      </UnorderedList>

      <Heading
        scrollMarginTop={8}
        id="special-gifts"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        特殊天赋
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.gifts.map((gift, index) => (
          <ListItem my={2} key={index} textAlign="justify">
            {gift}
          </ListItem>
        ))}
      </UnorderedList>

      <Heading
        scrollMarginTop={8}
        id="potential-problem-areas"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        潜在问题领域
      </Heading>
      {personalityClassGroup.potentialProblemAreas.length === 1 ? (
        personalityClassGroup.potentialProblemAreas[0]
          .split(/\.\n+/g)
          .map((potentialProblemArea) =>
            potentialProblemArea.endsWith(".")
              ? potentialProblemArea
              : `${potentialProblemArea}.`
          )
          .map((potentialProblemArea, index) => (
            <Text
              key={index}
              textAlign="justify"
              alignSelf="start"
            >
              {`${potentialProblemArea}`}
            </Text>
          ))
      ) : (
        <UnorderedList w="full">
          {personalityClassGroup.potentialProblemAreas.map(
            (potentialProblemArea, index) => (
              <ListItem my={2} key={index} textAlign="justify">
                {potentialProblemArea}
              </ListItem>
            )
          )}
        </UnorderedList>
      )}

      <Heading
        scrollMarginTop={8}
        id="explanation-of-problems"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        问题解释
      </Heading>
      {personalityClassGroup.explanationOfProblems
        .split(/\.\n+/g)
        .map((explanationOfProblem) =>
          explanationOfProblem.endsWith(".")
            ? explanationOfProblem
            : `${explanationOfProblem}.`
        )
        .map((explanationOfProblem, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${explanationOfProblem}`}
          </Text>
        ))}

      <Heading
        scrollMarginTop={8}
        id="solutions"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        解决方案
      </Heading>
      {personalityClassGroup.solutions
        .split(/\.\n+/g)
        .map((solution) =>
          solution.endsWith(".") ? solution : `${solution}.`
        )
        .map((solution, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${solution}`}
          </Text>
        ))}

      <Heading
        scrollMarginTop={8}
        id="living-happily-tips"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        快乐生活小提示
      </Heading>
      {personalityClassGroup.livingHappilyTips
        .split(/\.\n+/g)
        .map((tips) => (tips.endsWith(".") ? tips : `${tips}.`))
        .map((tips, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${tips}`}
          </Text>
        ))}

      {personalityClassGroup.suggestions !== undefined &&
        personalityClassGroup.suggestions.length === 1 && (
          <>
            <Heading
              scrollMarginTop={8}
              id="specific-suggestions"
              my={4}
              as="h2"
              size="md"
              textAlign="center"
            >
              具体建议
            </Heading>
            {personalityClassGroup.suggestions[0]
              .split(/\.\n+/g)
              .map((suggestion) =>
                suggestion.endsWith(".") ? suggestion : `${suggestion}.`
              )
              .map((suggestion, index) => (
                <Text
                  key={index}
                  textAlign="justify"
                  alignSelf="start"
                >
                  {`${suggestion}`}
                </Text>
              ))}
          </>
        )}

      {personalityClassGroup.suggestions !== undefined &&
        personalityClassGroup.suggestions.length > 1 && (
          <>
            <Heading
              scrollMarginTop={8}
              id="specific-suggestions"
              my={4}
              as="h2"
              size="md"
              textAlign="center"
            >
              具体建议
            </Heading>
            <UnorderedList w="full">
              {personalityClassGroup.suggestions!.map((suggestion, index) => (
                <ListItem my={2} key={index} textAlign="justify">
                  {suggestion}
                </ListItem>
              ))}
            </UnorderedList>
          </>
        )}

      <Heading
        scrollMarginTop={8}
        id="ten-rules-to-live-to-achieve-success"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        实现成功的生活十则
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.tenRulesToLive.map((rule, index) => (
          <ListItem my={2} key={index} textAlign="justify">
            {rule}
          </ListItem>
        ))}
      </UnorderedList>

      <Divider />

      {/* 分享卡片 */}
      <ShareCard 
        resultType={props.testResult.resultType} 
        testScores={props.testResult.testScores} 
      />

      <Divider />

      {/* 操作按钮 */}
      <Flex gap={4} w="full">
        <Button
          w="full"
          colorScheme="primary"
          leftIcon={<FiShare2 />}
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `我的高考青春复盘结果：${personalityClassGroup.name}`,
                text: personalityClassGroup.description,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert("链接已复制，快去分享给朋友吧！");
            }
          }}
        >
          分享结果
        </Button>
        <Button
          w="full"
          variant="outline"
          leftIcon={<FiRotateCcw />}
          onClick={() => router.push("/test")}
        >
          再测一次
        </Button>
      </Flex>

      {/* 转化引流 */}
      <Box
        bg="yellow.50"
        p={6}
        borderRadius="lg"
        border="2px"
        borderColor="yellow.400"
        w="full"
      >
        <Text fontWeight="bold" fontSize="lg" mb={4}>
          【来自出题人的最后一句掏心窝子的话】
        </Text>
        <Text fontSize="md" mb={4}>
          无论是你想去旷野掀桌子，还是想在体制内苟住当个好演员；无论你当年是学神还是偏科战神，人生这套卷子，选对方向永远比死磕压轴题更重要。
        </Text>
        <Text fontSize="md" mb={4}>
          信息差，才是这个社会最残酷的考题。尤其对于三四线城市的普通家庭，不被虚假宣传忽悠、实事求是地看清专业的真相，是突围的唯一捷径。
        </Text>
        <Button w="full" colorScheme="red" size="lg" onClick={() => router.push('/guide')}>
          👉 获取《2026未来专业与职业真相防坑指南》
        </Button>
      </Box>
    </Flex>
  );
}

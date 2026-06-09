import { Box, Heading, Text, Button, VStack, Container, Divider } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function GuidePage() {
  return (
    <Container maxW="800px" py={10} px={4}>
      <VStack spacing={8} align="stretch">
        {/* 返回按钮 */}
        <Link href="/test/result">
          <Button leftIcon={<FiArrowLeft />} variant="ghost" size="sm">
            返回结果页
          </Button>
        </Link>

        {/* 标题 */}
        <Heading as="h1" size="xl" textAlign="center" color="primary.700">
          2026未来专业与职业真相防坑指南
        </Heading>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          来自AI志愿专家的真心话
        </Text>

        <Divider />

        {/* 文案区域 - 等待王老师提供最终文案 */}
        <Box bg="gray.50" p={8} borderRadius="xl" border="2px" borderColor="primary.200">
          <VStack spacing={6} align="stretch">
            <Text fontSize="lg" lineHeight="tall">
              【文案占位 - 等待王老师提供】
            </Text>
            
            <Text fontSize="md" color="gray.600">
              核心内容框架：
            </Text>
            
            <Box pl={4} borderLeft="4px" borderColor="primary.500">
              <VStack align="stretch" spacing={3}>
                <Text>1. AI在志愿填报上的信息优势</Text>
                <Text>2. 如何正确使用AI工具（角色设定+信息输入）</Text>
                <Text>3. 推荐格式：冲一冲/稳一手/保一保</Text>
                <Text>4. 强调：不需要花几千块找人工专家</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>

        <Divider />

        {/* 操作提示 */}
        <Box bg="yellow.50" p={6} borderRadius="lg" border="2px" borderColor="yellow.400">
          <Heading as="h3" size="md" mb={4}>
            💡 如何使用AI填报志愿
          </Heading>
          <VStack align="stretch" spacing={3}>
            <Text><strong>步骤1：</strong>选择任意AI工具（ChatGPT、Claude、文心一言、通义千问等）</Text>
            <Text><strong>步骤2：</strong>设定角色：&quot;你是一位经验丰富的高考志愿填报专家&quot;</Text>
            <Text><strong>步骤3：</strong>提供信息：省份、科类（理科/文科）、分数/位次、兴趣方向</Text>
            <Text><strong>步骤4：</strong>要求输出：冲一冲（3个）、稳一手（3个）、保一保（3个）</Text>
          </VStack>
        </Box>

        {/* 分享按钮 */}
        <Button 
          colorScheme="primary" 
          size="lg" 
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: '2026高考志愿填报AI指南',
                text: '用AI免费搞定高考志愿填报，不用花几千块找专家',
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('链接已复制，快去分享给需要的人吧！');
            }
          }}
        >
          分享给需要的人
        </Button>
      </VStack>
    </Container>
  );
}

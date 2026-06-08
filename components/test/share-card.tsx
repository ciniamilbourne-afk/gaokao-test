import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Tag,
  TagLabel,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { FiDownload, FiShare2 } from "react-icons/fi";

import { getPersonalityClassGroupByType } from "../../lib/personality-test";

interface ShareCardProps {
  resultType: string;
  testScores: {
    t1: number;
    t2: number;
    t3: number;
    t4: number;
    y: number;
    z: string;
  };
}

export default function ShareCard({ resultType, testScores }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const personalityClassGroup = getPersonalityClassGroupByType(resultType);

  const generateImage = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
      });
      
      const image = canvas.toDataURL("image/png");
      
      // 下载图片
      const link = document.createElement("a");
      link.download = `我的高考人格_${personalityClassGroup.name}.png`;
      link.href = image;
      link.click();
      
      // 同时复制到剪贴板
      canvas.toBlob((blob) => {
        if (blob) {
          const item = new ClipboardItem({ "image/png": blob });
          navigator.clipboard.write([item]);
        }
      });
      
    } catch (error) {
      console.error("生成图片失败:", error);
      alert("生成图片失败，请重试");
    } finally {
      setIsGenerating(false);
    }
  };

  const shareResult = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
      });
      
      const image = canvas.toDataURL("image/png");
      
      if (navigator.share) {
        const blob = await (await fetch(image)).blob();
        const file = new File([blob], `我的高考人格_${personalityClassGroup.name}.png`, { type: "image/png" });
        
        await navigator.share({
          title: `我的高考青春复盘结果：${personalityClassGroup.name}`,
          text: personalityClassGroup.description,
          files: [file],
        });
      } else {
        // 复制链接
        navigator.clipboard.writeText(window.location.href);
        alert("链接已复制，快去分享给朋友吧！");
      }
    } catch (error) {
      console.error("分享失败:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // 计算主导特质
  const maxScore = Math.max(testScores.t1, testScores.t2, testScores.t3, testScores.t4);
  const dominantTrait = 
    testScores.t1 === maxScore ? "隐忍秩序" :
    testScores.t2 === maxScore ? "破局反叛" :
    testScores.t3 === maxScore ? "佛系松弛" : "感性内耗";

  return (
    <VStack spacing={6} w="full">
      {/* 隐藏的海报卡片 - 用于生成图片 */}
      <Box
        ref={cardRef}
        w="400px"
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="xl"
        position="relative"
        overflow="hidden"
      >
        {/* 背景装饰 */}
        <Box
          position="absolute"
          top="-50px"
          right="-50px"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="primary.100"
          opacity={0.5}
        />
        <Box
          position="absolute"
          bottom="-30px"
          left="-30px"
          w="150px"
          h="150px"
          borderRadius="full"
          bg="secondary.100"
          opacity={0.3}
        />

        <VStack spacing={4} position="relative" zIndex={1}>
          {/* 标题 */}
          <Text fontSize="sm" color="gray.500" fontWeight="bold">
            2026 高考青春复盘测试
          </Text>
          
          <Heading size="lg" textAlign="center" color="primary.700">
            {personalityClassGroup.name}
          </Heading>
          
          <Text fontSize="md" color="gray.600" textAlign="center">
            {personalityClassGroup.nameDescription}
          </Text>

          <Tag size="lg" colorScheme="primary" variant="solid">
            <TagLabel>人物图腾：{personalityClassGroup.epithet}</TagLabel>
          </Tag>

          <Divider />

          {/* 核心描述 */}
          <Text fontSize="sm" textAlign="center" lineHeight="tall">
            {personalityClassGroup.description}
          </Text>

          <Divider />

          {/* 得分分布 */}
          <VStack spacing={2} w="full">
            <Text fontSize="xs" color="gray.500">我的精神内核分布</Text>
            <HStack spacing={2} justify="center">
              <Box textAlign="center">
                <Text fontSize="xs" color="blue.500">隐忍</Text>
                <Text fontSize="sm" fontWeight="bold">{testScores.t1}</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xs" color="red.500">反叛</Text>
                <Text fontSize="sm" fontWeight="bold">{testScores.t2}</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xs" color="green.500">松弛</Text>
                <Text fontSize="sm" fontWeight="bold">{testScores.t3}</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xs" color="purple.500">内耗</Text>
                <Text fontSize="sm" fontWeight="bold">{testScores.t4}</Text>
              </Box>
            </HStack>
            <Text fontSize="xs" color="primary.500" fontWeight="bold">
              主导特质：{dominantTrait}
            </Text>
          </VStack>

          <Divider />

          {/* 金句 */}
          <Box bg="gray.50" p={3} borderRadius="md">
            <Text fontSize="xs" textAlign="center" fontStyle="italic">
              &quot;{personalityClassGroup.tenRulesToLive[0]}&quot;
            </Text>
          </Box>

          {/* 底部 */}
          <Text fontSize="xs" color="gray.400">
            扫码测测你的高考人格 →
          </Text>
        </VStack>
      </Box>

      {/* 操作按钮 */}
      <HStack spacing={4} w="full">
        <Button
          w="full"
          colorScheme="primary"
          leftIcon={<FiDownload />}
          onClick={generateImage}
          isLoading={isGenerating}
          loadingText="生成中..."
        >
          保存海报
        </Button>
        <Button
          w="full"
          variant="outline"
          leftIcon={<FiShare2 />}
          onClick={shareResult}
          isLoading={isGenerating}
          loadingText="分享中..."
        >
          分享结果
        </Button>
      </HStack>
    </VStack>
  );
}

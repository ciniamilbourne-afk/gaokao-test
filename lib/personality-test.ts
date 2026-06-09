import { openDB } from "idb";
import { Option, Future, Result } from "@swan-io/boxed";
import { personalityTest } from "../data/personality-test";
import { personalityClassGroup } from "../data/personality-class-groups";

export interface TestQuestion {
  no: number;
  question: string;
  answerOptions: TestAnswerOption[];
}

export interface TestAnswerOption {
  type: "A" | "B" | "C" | "D";
  answer: string;
  score: ScoreMap;
}

export interface ScoreMap {
  t1?: number; // 隐忍秩序
  t2?: number; // 破局反叛
  t3?: number; // 佛系松弛
  t4?: number; // 感性内耗
  y?: number;  // 真题得分
  z?: string;  // 身份锚点
}

export interface PersonalityClass {
  type: string;
  description: string;
}

export interface PersonalityClassGroup {
  type: string;
  name: string;
  nameDescription: string;
  epithet: string;
  description: string;
  jungianFunctionalPreference: {
    dominant: string;
    auxiliary: string;
    tertiary: string;
    inferior: string;
  };
  generalTraits: string[];
  relationshipStrengths: string[];
  relationshipWeaknesses: string[];
  successDefinition: string;
  strengths: string[];
  gifts: string[];
  potentialProblemAreas: string[];
  explanationOfProblems: string;
  solutions: string;
  livingHappilyTips: string;
  suggestions?: string[];
  tenRulesToLive: string[];
  letter: string;
  gaokaoEcho: string;
  quote?: string;
}

export interface TestResult {
  timestamp: number;
  testAnswers: string[];
  testScores: {
    t1: number;
    t2: number;
    t3: number;
    t4: number;
    y: number;
    z: string;
  };
  resultType: string;
}

const DB_NAME = "GAOKAO_TEST_APP_IDB";
const DB_VERSION = 1;
const TEST_RESULT_STORE = "TEST_RESULT_STORE";

async function getDb() {
  const db = await openDB<{
    [TEST_RESULT_STORE]: {
      key: number;
      value: TestResult;
    };
  }>(DB_NAME, DB_VERSION, {
    upgrade(idb) {
      idb.createObjectStore(TEST_RESULT_STORE, {
        keyPath: "timestamp",
      });
    },
  });

  return db;
}

export function getQuestionAnswerScore(
  questionNumber: number,
  answerOption: string
) {
  const question = personalityTest.find(
    (question) => question.no === questionNumber
  )!;

  return question.answerOptions.find((option) => option.type === answerOption)!
    .score;
}

export function calculateTestResult(
  testAnswers: string[]
) {
  const scores = {
    t1: 0,
    t2: 0,
    t3: 0,
    t4: 0,
    y: 0,
    z: "",
  };

  testAnswers.forEach((answer, index) => {
    const score = getQuestionAnswerScore(index + 1, answer);
    
    if (score.t1) scores.t1 += score.t1;
    if (score.t2) scores.t2 += score.t2;
    if (score.t3) scores.t3 += score.t3;
    if (score.t4) scores.t4 += score.t4;
    if (score.y) scores.y += score.y;
    if (score.z && index === 0) scores.z = score.z;
  });

  // 确定结果
  const resultType = determineResultType(scores);
  
  return {
    scores,
    resultType,
  };
}

function determineResultType(scores: {
  t1: number;
  t2: number;
  t3: number;
  t4: number;
  y: number;
  z: string;
}) {
  // T4（感性内耗）优先级最高，如果达到阈值直接导向林黛玉
  if (scores.t4 >= 25) {
    return "daiyuli";
  }

  // 确定X轴主导标签
  const maxScore = Math.max(scores.t1, scores.t2, scores.t3, scores.t4);
  let dominantType = "t1";
  
  if (scores.t2 === maxScore) dominantType = "t2";
  else if (scores.t3 === maxScore) dominantType = "t3";
  else if (scores.t4 === maxScore) dominantType = "t4";

  // Y轴：学霸区 vs 实战区
  const isScholar = scores.y >= 6;

  // Z轴：年轻态 vs 社会人
  const isYoung = scores.z === "young";

  // 根据XYZ三轴确定结果
  if (dominantType === "t1") {
    // 隐忍秩序 → 汤姆猫 / 猪八戒
    return isYoung ? "tom" : "bajie";
  } else if (dominantType === "t2") {
    // 破局反叛 → 张麻子 / 高启强 / 李云龙
    if (isScholar) {
      return "zhangmazi";
    } else {
      return isYoung ? "gaoqiqiang" : "liyunlong";
    }
  } else if (dominantType === "t3") {
    // 佛系松弛 → 纪春生 / 沈眉庄
    return isScholar ? "jisheng" : "meizhuang";
  } else {
    // 感性内耗 → 林黛玉
    return "daiyuli";
  }
}

export function getPersonalityClassGroupByType(type: string) {
  return personalityClassGroup.find(({ type: t }) => t === type)!;
}

export function getSavedTestResult(id: number) {
  return Future.make<Result<Option<TestResult>, Error>>((resolve) => {
    getDb()
      .then((db) => db.get(TEST_RESULT_STORE, id))
      .then(Option.fromNullable)
      .then((testResult) => resolve(Result.Ok(testResult)))
      .catch((error) => resolve(Result.Error(error)));
  });
}

export function getAllSavedTestResult() {
  return Future.make<Result<Option<TestResult[]>, Error>>((resolve) => {
    getDb()
      .then((db) => db.getAll(TEST_RESULT_STORE))
      .then(Option.fromNullable)
      .then((testResult) => resolve(Result.Ok(testResult)))
      .catch((error) => resolve(Result.Error(error)));
  });
}

export function saveTestResult(testResult: TestResult) {
  return Future.make<Result<number, Error>>((resolve) => {
    getDb()
      .then((db) => db.put(TEST_RESULT_STORE, testResult))
      .then((id) => resolve(Result.Ok(id)))
      .catch((error) => resolve(Result.Error(error)));
  });
}

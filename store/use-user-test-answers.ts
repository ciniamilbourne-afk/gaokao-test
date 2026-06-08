import create from "zustand";

interface UserTestAnswersState {
  userTestAnswers: string[];
  setUserTestAnswers: (newUserTestAnswers: string[]) => void;
}

const useUserTestAnswersStore = create<UserTestAnswersState>((set) => ({
  userTestAnswers: [],
  setUserTestAnswers: (newUserTestAnswers) =>
    set(() => ({
      userTestAnswers: newUserTestAnswers,
    })),
}));

export default useUserTestAnswersStore;

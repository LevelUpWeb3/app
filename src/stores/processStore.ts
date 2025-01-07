import { create } from "zustand";
import { LESSON_KEY_MAP } from "@/constants/solidity/code-solutions";

type ProgressStore = {
  lessons: Record<string, number>;
  challenges: Record<string, number>;
  lessonLoading: boolean;
  challengeLoading: boolean;
  setLessons: (lessons: Record<string, number>) => void;
  setChallenges: (challenges: Record<string, number>) => void;
  setLessonLoading: (loading: boolean) => void;
  setChallengeLoading: (loading: boolean) => void;
  updateLessonProgress: (lessonId: string, value: number) => Promise<void>;
  updateChallengeStatus: (challengeId: string) => Promise<void>;
  resetProgress: () => void;
  initializeProgress: (user: any) => void;
};

const useProgressStore = create<ProgressStore>((set, get) => ({
  lessons: {},
  challenges: {},
  lessonLoading: false,
  challengeLoading: false,
  setLessons: (lessons) => set({ lessons }),
  setChallenges: (challenges) => set({ challenges }),
  setLessonLoading: (loading) => set({ lessonLoading: loading }),
  setChallengeLoading: (loading) => set({ challengeLoading: loading }),

  updateLessonProgress: async (lessonId, value) => {
    set({ lessonLoading: true });
    try {
      const response = await fetch("/api/lesson/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonId: LESSON_KEY_MAP[lessonId],
          step: value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update lesson progress");
      }

      const data = await response.json();
      set({
        lessons: {
          ...get().lessons,
          [lessonId]: value,
        },
      });
      console.log("Lesson progress updated:", data.message);
    } catch (error) {
      console.error("Error updating lesson progress:", error.message);
      throw error;
    } finally {
      set({ lessonLoading: false });
    }
  },

  updateChallengeStatus: async (challengeId) => {
    set({ challengeLoading: true });
    try {
      const response = await fetch("/api/challenge/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challengeId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update challenge status");
      }

      const data = await response.json();
      set({
        challenges: {
          ...get().challenges,
          [challengeId]: 1,
        },
      });
      console.log("Challenge status updated:", data.message);
    } catch (error) {
      console.error("Error updating challenge status:", error.message);
      throw error;
    } finally {
      set({ challengeLoading: false });
    }
  },

  resetProgress: () => {
    set({
      lessons: {},
      challenges: {},
      lessonLoading: false,
      challengeLoading: false,
    });
  },

  initializeProgress: (user) => {
    if (!user) return;

    const { customMetadata } = user;

    if (customMetadata) {
      const lessons = JSON.parse(
        (user.customMetadata.lessons as string) || "{}",
      );
      const reverseMap = {};
      for (const [key, value] of Object.entries(LESSON_KEY_MAP)) {
        if (lessons[value] !== undefined) {
          reverseMap[key] = lessons[value];
        }
      }
      set({
        lessons: reverseMap,
        challenges: JSON.parse(
          (user.customMetadata.challenges as string) || "{}",
        ),
      });
    }
  },
}));
export default useProgressStore;

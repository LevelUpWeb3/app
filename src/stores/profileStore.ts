import { create } from "zustand";

type User = {
  customMetadata?: {
    username?: string;
    avatar?: string;
  };
  wallet?: {
    address?: string;
  };
};

type ProfileStore = {
  user: User | null;
  username: string;
  avatar: string;
  dialogOpen: boolean;
  loading: boolean;
  setUser: (user: User | null) => void;
  setUsername: (username: string) => void;
  setAvatar: (avatar: string) => void;
  setDialogOpen: (dialogOpen: boolean) => void;
  setLoading: (loading: boolean) => void;
  uploadProfileData: (
    name: string,
    file?: File | null,
    avatarUrl?: string | null,
  ) => Promise<void>;
};

const useProfileStore = create<ProfileStore>((set, get) => ({
  user: null,
  username: "",
  avatar: "",
  dialogOpen: false,
  loading: false,
  setUser: (user) => set({ user }),
  setUsername: (username) => set({ username }),
  setAvatar: (avatar) => set({ avatar }),
  setDialogOpen: (dialogOpen) => set({ dialogOpen }),
  setLoading: (loading) => set({ loading }),

  uploadProfileData: async (name, file?, avatarUrl?) => {
    set({ loading: true });
    try {
      const formData = new FormData();
      formData.append("username", name);
      if (file) {
        formData.append("avatar", file);
      }

      if (avatarUrl) {
        formData.append("avatarUrl", avatarUrl);
      }

      const response = await fetch("/api/user/profile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload profile data");
      }

      const result = await response.json();
      console.log("Profile updated successfully:", result);
      set({ dialogOpen: false });
    } catch (error) {
      console.error("Error uploading profile data:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProfileStore;
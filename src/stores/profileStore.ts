import { create } from "zustand";
import { truncateAddress } from "@/utils";
import { User } from "@privy-io/react-auth";

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
  initializeUserProfile: (user: User) => void;
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
      set({ dialogOpen: false });
    } catch (error) {
      console.error("Error uploading profile data:", error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  initializeUserProfile: (user) => {
    if (!user) return;

    const { customMetadata, wallet } = user;

    if (customMetadata) {
      set({
        username: (customMetadata.username as string) || "",
        avatar: (customMetadata.avatar as string) || "",
      });
    } else if (wallet?.address) {
      const name = truncateAddress(wallet.address);
      const avatarUrl = `https://gravatar.com/avatar/${wallet.address}?s=200&d=identicon`;
      set({
        username: name,
        avatar: avatarUrl,
      });
    } else if (user.github) {
      const avatarUrl = `https://gravatar.com/avatar/${user.github.username}?s=200&d=identicon`;
      set({
        username: user.github.name || user.github.username!,
        avatar: avatarUrl,
      });
    } else if (user.email) {
      const username = user.email.address!.split("@")[0];
      const avatarUrl = `https://gravatar.com/avatar/${username}?s=200&d=identicon`;
      set({
        username: username,
        avatar: avatarUrl,
      });
    } else if (user.google) {
      const username = user.google.name;
      const avatarUrl = `https://gravatar.com/avatar/${user.google.email}?s=200&d=identicon`;
      set({
        username: username || user.google.email.split("@")[0],
        avatar: avatarUrl,
      });
    }
  },
}));

export default useProfileStore;

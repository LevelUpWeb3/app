import { createContext, useContext, useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { truncateAddress } from "@/utils";

type ProfileContextProps = {
  username: string;
  avatar: string;
  user: any;
  setAvatar: (avatar: string) => void;
  setUsername: (username: string) => void;
};

const ProfileContext = createContext<ProfileContextProps | null>(null);

const ProfileContextProvider = ({ children }: any) => {
  const { user } = usePrivy();
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(
    "https://pbs.twimg.com/profile_images/1696531511519150080/Fq5O0LeN_400x400.jpg",
  );

  useEffect(() => {
    if (user?.customMetadata) {
      console.log("User", user);
    } else {
      setUsername(truncateAddress(user?.wallet?.address as string));
    }
  }, [user]);

  return (
    <ProfileContext.Provider
      value={{
        user: user,
        username: username,
        avatar: avatar,
        setAvatar: setAvatar,
        setUsername: setUsername,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export function useProfileContext() {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error(
      "useProfileContext must be used within ProfileContextProvider",
    );
  }
  return ctx;
}

export default ProfileContextProvider;

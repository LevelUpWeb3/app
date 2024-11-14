import BackLink from "@/components/Back";

import NavigationWrapper from "@/components/Navigation/NavigationWrapper";

const Navigation = () => {
  return (
    <NavigationWrapper sx={{ justifyContent: "flex-end" }}>
      <BackLink></BackLink>
    </NavigationWrapper>
  );
};

export default Navigation;

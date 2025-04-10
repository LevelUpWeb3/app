import { Stack } from "@mui/material";

import WalletDropdown from "./WalletDropdown";

const WalletToolkit = (props) => {
  const { dark } = props;

  return !process.env.NEXT_PUBLIC_PRIVY_APP_ID ? (
    <div>
      <span>Privy is not configured</span>
    </div>
  ) : (
    <Stack direction="row" spacing="0.8rem">
      <WalletDropdown dark={dark}></WalletDropdown>
    </Stack>
  );
};

export default WalletToolkit;

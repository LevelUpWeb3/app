import { Stack } from "@mui/material";

import WalletDropdown from "./WalletDropdown";

const WalletToolkit = (props) => {
  const { dark } = props;

  return (
    <Stack direction="row" spacing="0.8rem">
      <WalletDropdown dark={dark}></WalletDropdown>
    </Stack>
  );
};

export default WalletToolkit;

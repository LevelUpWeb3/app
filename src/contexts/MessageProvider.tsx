"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

type MessageContextType = (
  message: string,
  severity?: "error" | "warning" | "info" | "success",
  duration?: number,
) => void;
const MessageContext = createContext<MessageContextType>(() => {});

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [severity, setSeverity] = useState<
    "error" | "warning" | "info" | "success"
  >("info");
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(6000);

  const showMessage: MessageContextType = (msg, sev = "info", dur = 6000) => {
    setMessage(msg);
    setSeverity(sev);
    setDuration(dur);
    setOpen(true);
  };

  return (
    <MessageContext.Provider value={showMessage}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          variant="filled"
          sx={{ display: message ? "flex" : "none" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}

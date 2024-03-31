import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../Select";
import { LANGUAGE_VERSIONS } from "@/constants/constants";

interface LanguageProps {
  language: string;
  onSelect: (language: string) => void;
}

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }: LanguageProps) => {
  return (
    <div
      className="mb-2"
      style={{ position: "relative", zIndex: 1 }}
    >
      <Select
        value={language}
        onValueChange={onSelect}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue>{language}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map(([language, version]) => (
            <SelectItem
              key={language}
              value={language}
            >
              {language}
              &nbsp;
              <span style={{ color: "slate-600", fontSize: "x-small" }}>
                ({version})
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

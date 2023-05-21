import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { useState } from "react";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
}

export const Stack = (
  { title, icon: Icon }: StackProps,
  key: number
): JSX.Element => {
  const isString = typeof Icon === "string";
  const [color, setColor] = useState("#08A39A");
  function handleClick() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  }

  return (
    <StackCard className={`${key}`} key={key}>
      <Text>{title}</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} color={color} onClick={handleClick}/> 
      )}
    </StackCard>
  );
};

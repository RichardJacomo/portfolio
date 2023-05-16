import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";
import { useContext } from "react";
import { BlackWhiteContext } from "@/contexts/BlackWhiteProvider.";
import { globalStyles } from "@/styles/Global";

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

  const { mode } = useContext(BlackWhiteContext);

  return (
    <StackCard className={`${key}`} key={key}>
      <Text>{title}</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        // <Icon size={84} color="#868E96" /> //aqui vai ser mudado para preto
        <Icon size={84} color={mode? "#868E96" : "#623CEA"} /> //aqui vai ser mudado para preto
      )}
    </StackCard>
  );
};

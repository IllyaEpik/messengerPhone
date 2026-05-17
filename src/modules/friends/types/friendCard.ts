import { friendMenuVariant } from "./friendMenu";

export interface Props {
  name: string;
  username: string;
  primaryAction: string;
  secondaryAction: string;
  friendAvatar: string;
  firstAction: () => void;
  secondAction: () => void;
  variant: friendMenuVariant
}

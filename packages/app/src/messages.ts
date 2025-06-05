import { Person } from "server/models.ts";

export type Msg =
  | ["profile/save", { userid: string; profile: Person }]
  | ["profile/select", { userid: string }]
  
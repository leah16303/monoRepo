import { Person } from "server/src/models";

export type Msg =
  [
      "profile/save",
      {
        userid: string;
        profile: Person;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | ["profile/select", { userid: string }]
  
import { Person } from "server/models";

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
  
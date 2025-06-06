import { Recipe } from "server/models";


export type Msg =
  | [
      "recipe/save",
      {
        userid: string;
        recipe: Recipe;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | [
      "recipe/load",
      {
        userid: string;
        onSuccess?: (recipes: Recipe[]) => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | ["profile/select", { userid: string }]
  | ["history/navigate", { href: string }]
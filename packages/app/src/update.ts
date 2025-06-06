import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { Recipe } from "server/models";

export default function update(
  message: Msg,
  apply: Update.ApplyMap<Model>,
  user: Auth.User
) {
  switch (message[0]) {
    case "recipe/save":
      saveRecipe(message[1], user)
        .then((recipe) =>
          apply((model) => ({
            ...model,
            // append new recipe; you can replace all or append
            recipes: model.recipes ? [...model.recipes, recipe] : [recipe],
          }))
        )
        .then(() => {
          const { onSuccess } = message[1];
          if (onSuccess) onSuccess();
        })
        .catch((error: Error) => {
          const { onFailure } = message[1];
          if (onFailure) onFailure(error);
        });
      break;

    case "profile/select":
      // Load user profile and their recipes
      loadUserData(message[1].userid, user)
        .then((data) =>
          apply((model) => ({
            ...model,
            profile: data.profile,
            recipes: data.recipes,
          }))
        )
        .catch((error) => console.error("Failed to load user data:", error));
      break;

    case "history/navigate":
      // Handle navigation if needed
      break;

    default:
      console.warn("Unhandled message:", message);
      break;
  }
}

// Helper function to save a recipe to the backend
function saveRecipe(
  msg: {
    userid: string;
    recipe: Recipe;
  },
  user: Auth.User
): Promise<Recipe> {
  return fetch(`/api/recipes/${msg.userid}`, {
    method: "PUT",  // or POST if your server uses POST for create
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(msg.recipe),
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(`Failed to save recipe for ${msg.userid}: ${response.status}`);
      }
    })
    .then((json) => json as Recipe);
}

// Helper function to load user data including recipes
function loadUserData(
  userid: string,
  user: Auth.User
): Promise<{ profile: any; recipes: Recipe[] }> {
  return Promise.all([
    fetch(`/api/profiles/${userid}`, {
      headers: Auth.headers(user),
    }).then(response => response.json()),
    
    fetch(`/api/recipes/${userid}`, {
      method: "GET",
      headers: Auth.headers(user),
    }).then(response => response.json())
  ]).then(([profile, recipes]) => ({
    profile,
    recipes: Array.isArray(recipes) ? recipes : []
  }));
}
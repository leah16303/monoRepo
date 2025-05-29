export interface Person {
    userid: string;
    name: string;
    profilephoto: string | undefined;
    recipes: string[] | undefined;
    workouts: string[] | undefined;
    exerciseOptins: string[]| undefined;
}
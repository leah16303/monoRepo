export interface Person {
    userid: string;
    name: string;
    profilephot: URL | undefined;
    recipes: string[] | undefined;
    workouts: string[] | undefined;
    exerciseOptins: string[]| undefined;
}
import { Database as DB } from "@/lib/database.types";

type Tweet = Database["public"]["Tables"]["tweets"]["Row"];
type Profile = Database["public"]["Tables"]["profiles"]["Row"];

declare global {
  type Database = DB;
  type TweetWithAuthor = Tweet & {
    author: Profile;
    likes: number;
    user_has_liked_tweet: boolean;
  };
}

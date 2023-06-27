import {Resolver, Query, Ctx} from "type-graphql";

// import { User } from "../../entity/User";
// import { MyContext } from "../../types/MyContext";

@Resolver()
export class MeResolver {
    @Query(() => User, {nullable: true, complexity: 5})
    async me(ctx: MyContext) {
        return undefined;
    }

    @Mutation(() => Book)
    async createBook(name: string) {
        return Book.create({ name }).save();
    }
}

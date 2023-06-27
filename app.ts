import {Resolver, Query, Mutation, ObjectType, Field, ID} from "type-graphql";


@Resolver()
export class MeResolver {
    @Query(() => User, {nullable: true, complexity: 5})
    async matoki(ctx: MyContext) {
        return undefined;
    }

    @Mutation(() => Book)
    async createBook(name: string) {
        return Book.create({ name }).save();
    }
}

@ObjectType()
export class Product {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;
}

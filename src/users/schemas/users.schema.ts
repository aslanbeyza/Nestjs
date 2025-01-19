import { Prop,SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>
export class User{
    @Prop()
    username:string;

    @Prop()
    age:number;

}
export const UserSchema = SchemaFactory.createForClass(User)
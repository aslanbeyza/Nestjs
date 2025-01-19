import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument, User } from './schemas/users.schema';

@Injectable()
/*Başka yere eklenebilir Enjekte edilebilir yani */
export class UserService{

    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){
        
    }

   async getAll():Promise<User[]> {
        return await this.userModel.find();
    }
   async getOne(id: any) {
        return await this.userModel.findById(id);
    }

    async create(allProbs){
        const user = new this.userModel(allProbs)
        return await user.save();
    }
    async update(id,allProps){
        return await this.userModel.findByIdAndUpdate(id,allProps,{new:true});
        /* id ile objeyi buluyo allProps değişik olanlarla yenisini update ediyo */
    }
    async remove(id){
        return await this.userModel.findByIdAndDelete(id);
    }
}
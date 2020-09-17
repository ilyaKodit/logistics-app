import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../mongoDB/interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto'

@Injectable()
export class RegistrationService {

    constructor(
        @InjectModel('UserSchema') private readonly userModel : Model<User>
    ) { }

    async createUser(createUserDTO : CreateUserDTO): Promise<User> {
        const newUser = await this.userModel(createUserDTO);
        return newUser.save();
    }

    async checkLogin(req : any) : Promise<Boolean> {
        const result = await this.userModel.findOne({login: req.body.login}).exec();
        console.log(result);
        console.log(typeof result);
        if (typeof result === 'object'){
            return false;
        }
        return true;
    }

    async checkEmail(req : any) : Promise<Boolean> {
        const result = await this.userModel.findOne({email: req.body.email}).exec();
        console.log(result);
        console.log(typeof result);
        if (typeof result === 'object'){
            return false;
        }
        return true;
    }
}

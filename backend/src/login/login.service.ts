import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../mongoDB/interfaces/user.interface';

@Injectable()
export class LoginService {

    constructor(
        @InjectModel('UserSchema') private readonly userModel : Model<User>
    ) { }

    async auth(req : any){
        const user = await this.userModel.findOne({login: req.body.login}).exec();
        
        if (this.isEmptyObj(user)){
            return {error: true, message: 'Пользователь не найден'};
        } else {
            return {...user, error: false}
        }
    }

    async isEmptyObj(obj : object){
        for(var key in obj){
            return false;
        }
        return true;
    }
}

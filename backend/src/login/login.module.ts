import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../mongoDB/schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserSchema', schema: UserSchema }])
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}

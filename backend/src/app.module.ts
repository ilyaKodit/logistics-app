import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://logistics-app:ilya-gluk@cluster0-vw12a.mongodb.net/logistics?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true }),
    LoginModule,
    RegistrationModule,
  ],
})
export class AppModule {}

import { Controller, Post, Req, Res, Get } from '@nestjs/common';
import { RegistrationService } from './registration.service'
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('registration')
export class RegistrationController {

    constructor (
        private readonly registrationService: RegistrationService
    ) { }

    @Post('')
    async createUser (@Req() req, @Res() res, createUserDTO: CreateUserDTO){
        console.log('------------');
        if (await this.registrationService.checkLogin(req)){
            console.log('login занят');
            return res.json({error: true, message: 'Такой логин уже существует'});
        }
        if (await this.registrationService.checkEmail(req)){
            console.log('email занят');
            return res.json({error: true, message: 'Пользователь с такой почтой уже зарегистрирован'});
        }
        console.log('login не занят');
        console.log('email не занят');

        const newUser = {
            login: req.body.login,
            pass: req.body.pass,
            email: req.body.email
        };

        const response = await this.registrationService.createUser(newUser);
        res.json(response);
    }
}

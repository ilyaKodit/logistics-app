import { Controller, Post, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) { }

    @Post('')
    async auth(@Req() req, @Res() res){
        const response = await this.loginService.auth(req);
        await res.json(response);
    }
}

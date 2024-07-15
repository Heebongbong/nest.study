import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(@Req() req, @Res() res) {
    console.log(req);
    console.log(res);
    return 'Hello World!';
  }
}

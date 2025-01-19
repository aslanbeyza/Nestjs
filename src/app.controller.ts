import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/* @ şu sekılde olanlara decorator diyoruz  */
@Controller()
export class AppController {
  /* instance oluşturmusuz */
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

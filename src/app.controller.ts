import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  
  private logger = new Logger(AppController.name)
  
  constructor(private readonly appService: AppService) {}

  @Get('send-cats')
  sendCats(){
    return this.appService.sendCats()
  }
}

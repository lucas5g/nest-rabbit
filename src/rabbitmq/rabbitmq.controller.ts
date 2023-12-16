import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { CreateRabbitmqDto } from './dto/create-rabbitmq.dto';
import { UpdateRabbitmqDto } from './dto/update-rabbitmq.dto';

@Controller('rabbitmq')
export class RabbitmqController {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  @Get()
  async sendMessage() {
    await this.rabbitmqService.sendMessage('myQueue', `Bom dia ${new Date().getTime()}`);
  }

}

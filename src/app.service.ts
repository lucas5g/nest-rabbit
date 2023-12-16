import { Inject, Injectable, Logger } from '@nestjs/common'
import { ClientProxy, Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()

export class AppService {
  private logger = new Logger(AppService.name)
  constructor(@Inject('CATS_SERVICE') private client: ClientProxy) {}

  sendCats() {
    try {
      this.client.emit('cats', {
        id: `Miau-${Math.random() * 100}}`,
        data: {
          catName: `Miau-${Math.random() * 100}`,
        },
      });

      return {
        message: 'Cat sent',
      };
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern('cats')
  async recivingCat(@Payload() data, @Ctx() context: RmqContext) {
    try {
      console.log('data: ', data);
      this.logger.log(`data: ${JSON.stringify(data)}`);

      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      channel.ack(originalMsg);
      return data;
    } catch (error) {
      this.logger.log(`Error > showCat error: ${error}`);
    }
  }

}

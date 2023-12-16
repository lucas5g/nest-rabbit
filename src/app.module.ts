import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'CATS_SERVICE',
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'cats',
        noAck: false,
        queueOptions: {
          durable: true
        }
      }

    }
  ]), RabbitmqModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

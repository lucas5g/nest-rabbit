// rabbitmq.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitmqService implements OnModuleInit {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async onModuleInit(){
    // this.startListening()
    await this.connect()
    await this.receiveMessage('myQueue')
  }

  private async connect() {
    this.connection = await amqp.connect('amqp://localhost:5672');
    this.channel = await this.connection.createChannel();
  }

  async sendMessage(queue: string, message: string) {
    await this.channel.assertQueue(queue);
    this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async receiveMessage(queue: string) {
    await this.channel.assertQueue(queue);
    this.channel.consume(queue, (msg) => {
      if (msg !== null) {
        console.log(msg.content.toString());
        this.channel.ack(msg)
      }
    });
  }

}

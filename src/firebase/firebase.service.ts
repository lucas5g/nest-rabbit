import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateFirebaseDto } from './dto/create-firebase.dto';
import { UpdateFirebaseDto } from './dto/update-firebase.dto';
import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin'

@Injectable()
export class FirebaseService {

  constructor(@Inject('FirebaseAdmin') private firebaseAdmin: admin.app.App){}

  sendCloudMessaging(){

    const message = {
      notification:{
        title: 'vai uma mensagem',
        body:'veja as novas mensagens'
      },
      token:'da8PiuRJSfmofGyZxNAhO9:APA91bGT_VPhglyd5LoVesjc5QZ-LbLzEkxJDfrhB6k4MQ_rpSQEb2qUA0-Kc9D5-BmBWHJM4qf9Y6Sg0DG42nkV53X-nc3mTQweej1wQJRQnGvfyrdhBbf8bmIBHgQNdmyyX_o8eBYH'
    }
  try{
    this.firebaseAdmin.messaging().send(message)
  }catch(error){
    Logger.error(error)
  }

  }

  create(createFirebaseDto: CreateFirebaseDto) {
    return 'This action adds a new firebase';
  }

  findAll() {
    return `This action returns all firebase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} firebase`;
  }

  update(id: number, updateFirebaseDto: UpdateFirebaseDto) {
    return `This action updates a #${id} firebase`;
  }

  remove(id: number) {
    return `This action removes a #${id} firebase`;
  }
}

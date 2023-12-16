import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { FirebaseController } from './firebase.controller';
import firebaseAdmin, { ServiceAccount } from 'firebase-admin'
import {type, project_id, private_key,client_email } from '../../pushnotification.json'

const serviceAccount:ServiceAccount= {
  
  projectId: project_id,
  privateKey: private_key, 
  clientEmail: client_email
}

@Module({
  controllers: [FirebaseController],
  providers: [FirebaseService, 
  {
    provide: 'FirebaseAdmin',
    useFactory: () => {
      return firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
      })
    }
  }],
})
export class FirebaseModule {}

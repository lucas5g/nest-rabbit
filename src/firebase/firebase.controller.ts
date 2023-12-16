import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { CreateFirebaseDto } from './dto/create-firebase.dto';
import { UpdateFirebaseDto } from './dto/update-firebase.dto';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get('send-cloud-messaging')
  sendCloudMessaging(){
    const data = {
      title: 'Lucas de sousa',
      body:'Bom dia, tudo bem?',
      token:'da8PiuRJSfmofGyZxNAhO9:APA91bGT_VPhglyd5LoVesjc5QZ-LbLzEkxJDfrhB6k4MQ_rpSQEb2qUA0-Kc9D5-BmBWHJM4qf9Y6Sg0DG42nkV53X-nc3mTQweej1wQJRQnGvfyrdhBbf8bmIBHgQNdmyyX_o8eBYH'

    }
    return this.firebaseService.sendCloudMessaging(data)
  }
  @Post()
  create(@Body() createFirebaseDto: CreateFirebaseDto) {
    return this.firebaseService.create(createFirebaseDto);
  }

  @Get()
  findAll() {
    return this.firebaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.firebaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFirebaseDto: UpdateFirebaseDto) {
    return this.firebaseService.update(+id, updateFirebaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.firebaseService.remove(+id);
  }
}

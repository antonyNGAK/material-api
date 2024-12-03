import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialsModule } from './materials/materials.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://RCB:WXCVBN@cluster0.zf09ttp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MaterialsModule,
  ],
})
export class AppModule {}

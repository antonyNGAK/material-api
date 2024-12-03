import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {MaterialsController} from './materials.controller';
import {MaterialsService} from './materials.service';
import {MaterialSchema} from './schemas/materials.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Material', schema: MaterialSchema}]),
  ],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})  
export class MaterialsModule {}
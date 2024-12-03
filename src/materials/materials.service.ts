import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Material} from './schemas/materials.schema';

@Injectable()
export class MaterialsService {
    constructor(
        @InjectModel('Material') private readonly materialModel: Model<Material>,
    ) {} 

    async create(material: Material): Promise<Material> {
        const createdMaterial = new this.materialModel(material);
        return createdMaterial.save();
    }

    async findAll(): Promise<Material[]> {
        return this.materialModel.find().exec();
    }

    async findOne(id: string): Promise<Material> {
        return this.materialModel.findById(id).exec();
    }

    async update(id: string, material: Material): Promise<Material> {
        return this.materialModel.findByIdAndUpdate(id, material, {new: true}).exec();
    }

    async remove(id: string): Promise<Material> {
        return this.materialModel.findByIdAndDelete(id).exec();
    }
}
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { Material } from './schemas/materials.schema';


@Controller('materials')
export class MaterialsController {
    constructor(private readonly materialsService: MaterialsService) {}


    @Get('/ping')
    ping(): string {
        return 'Pong';
    }

    @Get()
    async findAll(): Promise<Material[]> {
        return this.materialsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Material> {
        return this.materialsService.findOne(id);
    }
    @Post()
    async create(@Body() material: Material): Promise<Material> {
        return this.materialsService.create(material);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() material: Material): Promise<Material> {
        return this.materialsService.update(id, material);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Material> {
        return this.materialsService.remove(id);
    }
}
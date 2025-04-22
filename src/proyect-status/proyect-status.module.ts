import { Module } from '@nestjs/common';
import { ProyectStatusService } from './proyect-status.service';
import { ProyectStatusController } from './proyect-status.controller';

@Module({
  controllers: [ProyectStatusController],
  providers: [ProyectStatusService],
})
export class ProyectStatusModule {}

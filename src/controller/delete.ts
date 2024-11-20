import { VehicleStore } from '../store/vehicle';
import { Request, Response } from 'express';

interface Parameters {
  id: string;
}

export class DeleteVehicleController {
  constructor(private readonly vehicleStore: VehicleStore) {
    
  }
  
  public async handle(req: Request<Parameters>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const deleteRequest = {id: id};
    await this.vehicleStore.deleteVehicle(deleteRequest);

    res.status(204).send();
    
  }
}



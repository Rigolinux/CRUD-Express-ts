
//models

import { Travel } from './../Models/Travel';

//importing types
import{Request, Response} from 'express';


export const getTravels = async (_req: Request, res: Response) => {
    const travels = await Travel.findAll();
    res.json(travels);
};

export const getTravel = async (_req: Request, res: Response) => {
    const { id } = _req.params;
    const travel = await Travel.findByPk(id).catch((err) => {
        res.status(500).json({
            msg: 
            err.message
        });
    });
    if(travel){
        res.json(travel);
    }else{
        res.status(404).json({
            msg: `There is no travel with the id ${id}`
        });
    }
};

export const createTravel = async (_req: Request, res: Response) => {
    const {date, weather, visibility, Comments} = _req.body;
    const travel = await Travel.create({
        date,
        weather,
        visibility,
        Comments
    }).catch((err) => {
        res.status(500).json({
            msg: 
            err.message
        });
    });
    if(travel){
        res.json(travel);
    }else{
        res.status(500).json({
            msg: 'Error creating travel'
        });
    }
};

export const updateTravel = async (_req: Request, res: Response) => {
    const { id } = _req.params;
    const {date, weather, visibility, Comments} = _req.body;
    const travel = await  Travel.update({
        date,
        weather,
        visibility,
        Comments

    },{where: {id}}).catch((err) => {
        res.status(500).json({
            msg: 
            err.message
        });
    });
    if(travel)
    {
        res.json(travel);
    }else{
        res.status(404).json({
            msg: `There is no travel with the id ${id}`
        });
    }
};

export const deleteTravel = async (_req: Request, res: Response) => {
    const { id } = _req.params;
    try{
    const travel = await Travel.findByPk(id);
    if(travel){
        await travel.destroy();
        
        res.json("Travel deleted");
    }else{
        res.status(404).json({
            msg: `There is no travel with the id`
        });
    }
}catch(err){
    res.status(500).json({
        msg: 
        'Error deleting travel'
    });
}
};


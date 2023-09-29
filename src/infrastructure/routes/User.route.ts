import {userController} from "../di";
import {Request, Response, Router} from "express";

const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userController.find(req);
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json({message: e.message});
    }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userController.findById(req);
        return res.status(200).json(user);
    } catch (e: any) {
        return res.status(500).json({message: e.message});
    }
});

userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const user = await userController.create(req);
        return res.status(200).json(user);
    } catch (e: any) {
        return res.status(500).json({message: e.message});
    }
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        await userController.delete(req);
        return res.status(200).json({message: 'User deleted'});
    } catch (e: any) {
        return res.status(500).json({message: e.message});
    }
});

userRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userController.update(req);
        return res.status(200).json(user);
    } catch (e: any) {
        return res.status(500).json({message: e.message});
    }
});


export {userRouter};


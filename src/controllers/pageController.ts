import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    res.render('pages/page', {
        menu: createMenuObject('all'),
        bannner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        bannner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        bannner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        bannner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}
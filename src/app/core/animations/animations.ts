import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const dropDownAnimation = [
    trigger('dropDownUp', [
        state('down', style({
            'transform': 'translateY(0)'
        })),
        state('up', style({
            'transform': 'translateY(-100%)'
        })),
        transition('down => up', animate('1s', keyframes([
            style({ transform: 'translateY(0)', offset: 0 }),
            style({ transform: 'translateY(3%)', offset: 0.4 }),
            style({ transform: 'translateY(0)' , offset: 0.7 }),
            style({ transform: 'translateY(-50%)', offset: 0.85 }),
            style({ transform: 'translateY(-100%)' , offset: 1 })
        ]))

        ),
        transition('up => down', animate('1s', keyframes([
            style({ transform: 'translateY(-100%)', offset: 0 }),
            style({ transform: 'translateY(-50%)', offset: 0.4 }),
            style({ transform: 'translateY(0)', offset: 0.7 }),
            style({ transform: 'translateY(-5%)', offset: 0.85 }),
            style({ transform: 'translateY(0)' , offset: 1 })
        ]))
        )
    ])
];
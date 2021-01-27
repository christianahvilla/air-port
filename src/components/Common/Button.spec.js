import React from 'react';
import { render } from '@testing-library/react';
import DefaultButton from './Button';

describe('DefaultText', () => {
    const props = {
        text: 'Atras',
        color: 'secondary',
        variant: 'text',
        disabled: false,
        onClick: jest.fn,
        className: 'class',
    };

    it('should render', () => {
        render(<DefaultButton {...props} />);
    });

    it('should render an button', () => {
        const component = render(<DefaultButton {...props} />);
        const button = component.baseElement.querySelector('button');
        expect(button).toBeDefined();
    });
});

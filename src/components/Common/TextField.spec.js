import React from 'react';
import { render } from '@testing-library/react';
import DefaultTextField from './TextField';

describe('DefaultText', () => {
    const props = {
        label: 'Personas',
        type: 'number',
        variant: 'outlined',
        value: 2,
        handleChange: jest.fn(),
        inputProps: {},
    };

    it('should render', () => {
        render(<DefaultTextField {...props} />);
    });

    it('should render an input', () => {
        const component = render(<DefaultTextField {...props} />);
        const input = component.baseElement.querySelector('input');
        expect(input).toBeDefined();
    });
});

import React from 'react';
import { render } from '@testing-library/react';
import DefaultText from './Text';

describe('DefaultText', () => {
    const props = {
        variant: 'h2',
        component: 'h1',
        text: 'Welcome',
        className: 'text',
    };

    it('should render', () => {
        render(<DefaultText {...props} />);
    });

    it('should render an text', () => {
        const component = render(<DefaultText {...props} />);
        const text = component.baseElement.querySelector('p');
        expect(text).toBeDefined();
    });
});

import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

const Email = ({ name, email, subject, message }) => {
    return (
        <Html>
            <Button
                pX={20}
                pY={12}
                href="https://example.com"
                style={{ background: '#000', color: '#fff' }}
            >
                {name}
                {email}
                {subject}
                {message}
            </Button>
        </Html>
    );
}

export default Email;
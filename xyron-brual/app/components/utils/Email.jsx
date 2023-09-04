// import { Button } from '@react-email/button';
// import { Html } from '@react-email/html';
// import * as React from 'react';

// const Email = ({ name, email, subject, message }) => {
//     return (
//         <Html>
//             <Button
//                 pX={20}
//                 pY={12}
//                 href="https://example.com"
//                 style={{ background: '#000', color: '#fff' }}
//             >
//                 {name}
//                 {email}
//                 {subject}
//                 {message}
//             </Button>
//         </Html>
//     );
// }

// export default Email;

import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

export const Email = ({ name, email, subject, message }) => {
    const currentDate = new Date().toJSON().slice(0, 10)

    return (
        <Html>
            <Head />
            <Preview>You have a message from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={logo}>
                        <Text style={paragraph}>From: {name} {"<" + email + ">"}</Text>
                        <Text style={paragraph}>Subject: {subject}</Text>
                        <Text style={paragraph}>Date: {currentDate}</Text>
                    </Section>
                    <Section style={sectionsBorders}>
                        <Row>
                            <Column style={sectionBorder} />
                            <Column style={sectionBorder} />
                            <Column style={sectionBorder} />
                        </Row>
                    </Section>
                    <Section style={content}>
                        <Text style={paragraph}>
                            {message}
                        </Text>
                    </Section>
                </Container>

            </Body>
        </Html>
    );
};

export default Email;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
    backgroundColor: '#efeef1',
    fontFamily,
};

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
};

const container = {
    width: '580px',
    margin: '30px auto',
    backgroundColor: '#ffffff',
};

const footer = {
    width: '580px',
    margin: '0 auto',
};

const content = {
    padding: '5px 50px 10px 60px',
};

const logo = {
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    padding: 30,
};

const sectionsBorders = {
    width: '100%',
    display: 'flex',
};

const sectionBorder = {
    borderBottom: '1px solid rgb(238,238,238)',
    width: '249px',
};

const sectionCenter = {
    borderBottom: '1px solid rgb(145,71,255)',
    width: '102px',
};

const link = {
    textDecoration: 'underline',
};

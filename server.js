const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const CONTACT_FILE = path.join(DATA_DIR, 'contact-submissions.txt');

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

app.post('/api/contact', async (req, res) => {
    try {
        const {
            firstName = '',
            lastName = '',
            email = '',
            phone = '',
            subject = '',
            message = ''
        } = req.body || {};

        const values = [firstName, lastName, email, phone, subject, message].map((value) => String(value).trim());
        if (values.some((value) => !value)) {
            return res.status(400).json({
                message: 'Please provide first name, last name, email, phone, subject, and message.'
            });
        }

        const [trimmedFirstName, trimmedLastName, trimmedEmail, trimmedPhone, trimmedSubject, trimmedMessage] = values;

        await fs.mkdir(DATA_DIR, { recursive: true });

        const timestamp = new Date().toISOString();
        const entry = [
            '--- Aithentic contact submission ---',
            `Timestamp: ${timestamp}`,
            `Name: ${[trimmedFirstName, trimmedLastName].filter(Boolean).join(' ')}`.trim(),
            `Email: ${trimmedEmail}`,
            `Phone: ${trimmedPhone}`,
            `Subject: ${trimmedSubject}`,
            'Message:',
            trimmedMessage,
            '-------------------------------------',
            ''
        ].join('\n');

        await fs.appendFile(CONTACT_FILE, entry, { encoding: 'utf8' });

        return res.status(201).json({
            message: 'Thanks for reaching out! Your details are on our radar and we will get back to you shortly.'
        });
    } catch (error) {
        console.error('Failed to store contact submission', error);
        return res.status(500).json({
            message: 'We were unable to save your message. Please try again later.'
        });
    }
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Aithentic site running at http://localhost:${PORT}`);
});


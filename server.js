const express = require('express');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const SUBMISSION_FILE = path.join(DATA_DIR, 'contact-submissions.txt');

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(ROOT_DIR));

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-()\s]{7,}$/;

app.post('/api/contact', async (req, res) => {
    const {
        firstName = '',
        lastName = '',
        email = '',
        phone = '',
        subject = '',
        message = ''
    } = req.body || {};

    const fields = { firstName, lastName, email, phone, subject, message };
    const missingFields = Object.entries(fields)
        .filter(([, value]) => typeof value !== 'string' || !value.trim())
        .map(([key]) => key);

    if (missingFields.length) {
        return res.status(400).json({ message: 'Please fill out all required fields before submitting.' });
    }

    if (!emailPattern.test(email.trim())) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (!phonePattern.test(phone.trim())) {
        return res.status(400).json({ message: 'Please provide a valid phone number with at least seven digits.' });
    }

    const sanitized = Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, value.trim()])
    );

    const timestamp = new Date();
    const submissionBlock = [
        '--- Aithentic contact submission ---',
        `Timestamp: ${timestamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
        `First name: ${sanitized.firstName}`,
        `Last name: ${sanitized.lastName}`,
        `Email: ${sanitized.email}`,
        `Phone: ${sanitized.phone}`,
        `Subject: ${sanitized.subject}`,
        'Message:',
        sanitized.message,
        '---------------------------------------------',
        ''
    ].join('\n');

    try {
        if (!fs.existsSync(DATA_DIR)) {
            await fsPromises.mkdir(DATA_DIR, { recursive: true });
        }

        await fsPromises.appendFile(SUBMISSION_FILE, submissionBlock, 'utf8');
    } catch (error) {
        console.error('Failed to write submission:', error);
        return res.status(500).json({ message: 'Unable to store your submission at the moment. Please try again later.' });
    }

    return res.status(201).json({ message: 'Submission stored successfully.' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Aithentic server listening on http://localhost:${PORT}`);
});

'use strict'

const nodemailer = require('nodemailer');
const input = require('../../data/input.json')
const Email = require('../../models/email');

const emailController = {
    
    showFormToSendEmail: (req, res) => {
        res.render('templates/quality/form_complain', { formComplain:input.formComplain, sendMessage: false });
    },

    postEmail: async (req, res) => {
        const { name, email, phone, message } = req.body;
        /* const newEmail = new Email ({ name, email, phone, message });
        await newEmail.save(); */
        console.log(req.body)

        const contentHTML = `
            <h1>User Info</h1>
            <ul>
                <li>Username: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
            </ul>
            <p>${message}</p>
        `;
        console.log(contentHTML);

        //Aqui configuamos donde vamos a enviar todo
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: '587',
            secure: false,
            auth: {
                user: 'horacio.vandervort35@ethereal.email',
                pass: 'fpr3j4WqXVasKbkC3a'
            }
        });

        //Aqui es donde decimos el que vamos a enviar
        const info = await transporter.sendMail({
            from: 'Receptor',
            to: 'simplyfiers.F5@gmail.com',
            subject: 'Formulario enviado desde Cars.Net',
            html: contentHTML
        });

        console.log('Message sent', info.messageId);
        res.render('templates/quality/form_complain', { sendMessage: true });
    }
};

module.exports = emailController;
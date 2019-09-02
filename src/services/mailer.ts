import { createTransport } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { CONFIG } from '../constants'

export const transporter: Mail = createTransport(CONFIG.mailer)

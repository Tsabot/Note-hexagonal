import { EmailModel } from './email.model';
import { EmailService } from './email.service'
import { NoteModel } from './note.model';
import { Notification } from './notification';

const completeEmail = new EmailModel('me', 'you', 'title', new NoteModel("yes",'pog', new Date()))

describe("Email services", ()=> {
    const notification: Notification = {
        sendMail: (email: EmailModel) => {
            return "Success";
        }
    };
    const emailService = new EmailService(notification)

    it("Should send mail successfully", () => {
        expect(emailService.sendMail(completeEmail)).toBe('Success')
    });
})
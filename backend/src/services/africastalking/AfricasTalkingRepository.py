import africastalking


class AfricasTalkingRepository:

    API_KEY = "atsk_fc5993a5cb2d76eb920c430a5df2400475749a73797726e7489fd103cdb6119907c5e144"

    SANDBOX_USERNAME = "sandbox"
    SANDBOX_SHORT_CODE = "99133"

    def __init__(self):
        africastalking.initialize(self.SANDBOX_USERNAME, self.API_KEY)
        self.sms = africastalking.SMS


    def send_message(self, recipient: str, message: str):
        recipients = [recipient]

        try:
            response = self.sms.send(message, recipients, self.SANDBOX_SHORT_CODE)
        except Exception as e:
            print ('Encountered an error while sending: %s' % str(e))

        pass
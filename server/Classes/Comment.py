class Comment:
    def __init__(self, post_id, name, email, message):
        self.post_id = post_id
        self.name = name
        self.email = email
        self.message = message

    def dict(self):
        return {
            'post_id': self.post_id,
            'name': self.name,
            'email': self.email,
            'message': self.message
        }

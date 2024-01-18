from datetime import datetime

class Comment:
    def __init__(self, post_id, name, email, message, created_at=datetime.utcnow()):
        self.post_id = post_id
        self.name = name
        self.email = email
        self.message = message
        self.created_at = created_at

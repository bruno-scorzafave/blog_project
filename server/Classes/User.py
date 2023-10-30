class User:
    def __init__(self, email, username='', firstname='', lastname='', aboutme='', posts={'qty': 0}):
        self.email = email
        self.username = username
        self.firstname = firstname
        self.lastname = lastname
        self.aboutme = aboutme
        self.posts = posts

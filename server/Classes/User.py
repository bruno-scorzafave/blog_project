class User:
    def __init__(self, email, username, age='', firstname='', lastname='', aboutme='', authenticated=False):
        self.email = email
        self.username = username
        self.age = age
        self.firstname = firstname
        self.lastname = lastname
        self.aboutme = aboutme
        self.authenticated = authenticated

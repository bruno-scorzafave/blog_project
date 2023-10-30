from datetime import datetime


class BlogPost:
    def __init__(self, title, description, slug, content, date=datetime.now()):
        self.title = title
        self.description = description
        self.slug = slug
        self.content = content
        self.date = date

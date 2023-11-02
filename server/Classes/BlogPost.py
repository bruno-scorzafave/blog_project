from datetime import datetime


class BlogPost:
    def __init__(self, id, title, description, slug, content, created_at=datetime.now(), updated_at=datetime.now()):
        self.id = id
        self.title = title
        self.description = description
        self.slug = slug
        self.content = content
        self.created_at = created_at
        self.updated_at = updated_at

    def dict(self):
        return {f'posts.{self.id}': {
            'title': self.title,
            'description': self.description,
            'slug': self.slug,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }}

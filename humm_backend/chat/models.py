from django.db import models

class Text(models.Model):
    text_contents = models.TextField()
    text_date = models.DateTimeField(auto_now_add=True)
    text_author = models.CharField(max_length=100)

    def __str__(self):
        return self.text_contents

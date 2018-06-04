import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bar',
        'USER': 'root',
        'PASSWORD': 'database',
    }
}
    

MEDIA_ROOT = os.path.join(BASE_DIR, '../media/')
STATIC_ROOT = os.path.join(BASE_DIR, '../static/')

"""
WSGI config for DjangoServer project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os
import django
from django.core.handlers.wsgi import WSGIHandler

class WSGIEnvironment(WSGIHandler):
    def __call__(self, environ, start_response):
        os.environ["ACROLINK_SECRET_KEY"] = environ.get("ACROLINK_SECRET_KEY", "")
        os.environ["ACROLINK_DATABASE_NAME"] = environ.get("ACROLINK_DATABASE_NAME", "")
        os.environ["ACROLINK_DATABASE_USER"] = environ.get("ACROLINK_DATABASE_USER", "")
        os.environ["ACROLINK_DATABASE_PASSWORD"] = environ.get("ACROLINK_DATABASE_PASSWORD", "")
        os.environ["ACROLINK_DATABASE_HOST"] = environ.get("ACROLINK_DATABASE_HOST", "")
        os.environ["ACROLINK_DATABASE_PORT"] = environ.get("ACROLINK_DATABASE_PORT", "")
        os.environ["ACROLINK_EMAIL_HOST"] = environ.get("ACROLINK_EMAIL_HOST", "")
        os.environ["ACROLINK_EMAIL_PORT"] = environ.get("ACROLINK_EMAIL_PORT", "")
        os.environ["ACROLINK_EMAIL_USE_SSL"] = environ.get("ACROLINK_EMAIL_USE_SSL", "")
        os.environ["ACROLINK_EMAIL_HOST_USER"] = environ.get("ACROLINK_EMAIL_HOST_USER", "")
        os.environ["ACROLINK_EMAIL_HOST_PASSWORD"] = environ.get("ACROLINK_EMAIL_HOST_PASSWORD", "")
        return super(WSGIEnvironment, self).__call__(environ, start_response)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "DjangoServer.settings")
django.setup(set_prefix=False)
application = WSGIEnvironment()

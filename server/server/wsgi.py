"""
WSGI config for server project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')

application = get_wsgi_application()

#Ml Registry

import inspect
from apps.ml.registry import MLRegistry
from apps.ml.recommendation_model.rec_model import RandomForestClassifier

try:
    registry = MLRegistry() # create ML registry
    # Random Forest classifier
    rf = RandomForestClassifier()
    # add to ML registry
    registry.add_algorithm(endpoint_name="recommend_sci",
                            algorithm_object=rf,
                            algorithm_name="science_concierge",
                            algorithm_status="production",
                            algorithm_version="0.0.1",
                            owner="Aditya",
                            algorithm_description="Recommendation based on likes",
                            algorithm_code=inspect.getsource(RandomForestClassifier))

except Exception as e:
    print("Exception while loading the algorithms to the registry,", str(e))
from django.test import TestCase

from apps.ml.recommendation_model.rec_model import RandomForestClassifier

class MLTests(TestCase):
    def test_rf_algorithm(self):
        input_data = {
            "likes":[10,20,50],
            "dislikes":[66,56]
        }
        my_alg = RandomForestClassifier()
        response = my_alg.compute_prediction(input_data)
        #self.assertEqual('OK', response['status'])
        #self.assertTrue('label' in response)
        self.assertEqual([50, 20, 25, 80, 10, 298, 136, 29, 8, 263], response)
import joblib
import pandas as pd
import os

class RandomForestClassifier:
    def __init__(self):
        ##FIX THIS
        url_to_joblib = os.getcwd()
        # self.model = joblib.load("C:\\Users\\rajsi\\Documents\\django_project\\backend\\server\\apps\\ml\\recommendation_model\\recommend_model.joblib")
        self.model = joblib.load(url_to_joblib + "/apps/ml/recommendation_model/recommend_model.joblib")

    def predict(self, likes_array,dislikes_array):

        self.index  = self.model.recommend(likes=likes_array,dislikes=dislikes_array)
        self.docs_recommend = [i for i in self.index[0:10]]
        return self.docs_recommend


    def compute_prediction(self, input_data):
        try:
            likes_array=input_data["likes"]
            dislikes_array=input_data["dislikes"]
            prediction = self.predict(likes_array,dislikes_array)  # only one sample
        except Exception as e:
            return {"status": "Error", "message": str(e)}

        return prediction
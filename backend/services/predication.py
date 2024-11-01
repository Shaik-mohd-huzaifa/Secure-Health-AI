import joblib
from ml_model_training_utilities.Classifier import classify_input

model = joblib.load("./trained_model/model.pkl")
vectorizer = joblib.load("./trained_model/vectorizer.pkl")


def prediction(query):
    intent = classify_input(query, model=model, vectorizer=vectorizer)
    return intent

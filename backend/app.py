from flask import Flask, request, jsonify
from services.predication import prediction
from services.tools import data_from_rag, plain_llm

app = Flask(__name__)


print(prediction("Can i change my account password"))


@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_data()
    userQuery = data.get("prompt")
    userdetails = data.get("details")

    intent = prediction(userQuery)

    if intent == "LLM":
        response = plain_llm(userQuery)

        return jsonify({"response": response, "intent": intent})
    elif intent == "RAG":
        response = data_from_rag(userQuery)

        return jsonify({"response": response, "intent": intent})
    elif intent == "db":
        if userdetails:
            response = data_from_rag(userQuery)
            return jsonify({"response": response, "intent": intent})
        else:
            return jsonify({"repsonse": "", "intent": "Auth"})
    else:
        return jsonify({"repsonse": "", "intent": intent})


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify
from services.predication import prediction
from services.tools import data_from_rag, plain_llm

app = Flask(__name__)


@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    userQuery = data.get("prompt")
    Auth = data.get("Auth")

    intent = prediction(userQuery)

    if intent == "LLM":
        response = plain_llm(userQuery)

        return jsonify({"response": response, "intent": intent})
    elif intent == "RAG":
        response = data_from_rag(userQuery)

        return jsonify({"response": response, "intent": intent})
    elif intent == "db":
        if Auth:
            response = data_from_rag(userQuery)
            return jsonify({"response": response, "intent": intent})
        else:
            return jsonify({"repsonse": "", "intent": "Auth"})
    else:
        return jsonify({"repsonse": "", "intent": intent})


if __name__ == "__main__":
    app.run(debug=True)

import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()

LLM = ChatOpenAI(api_key=os.getenv("OPENAI_API_KEY"), model="gpt-4o")

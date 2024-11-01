from langchain.tools.render import format_tool_to_openai_function
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnableMap
from langchain_core.prompts import ChatPromptTemplate
from pydantic import BaseModel, Field
from services.llm import LLM
from services.vectorStore import vector_store

# @tool
# def get_data_from_database():
prompt_template = """Answer the question based only on the following context:
{context}

Question: {context} 
"""
prompt = ChatPromptTemplate.from_template(template=prompt_template)

retreiver = vector_store.as_retriever()

output_retreiver = StrOutputParser()


def data_from_rag(query):
    chain = (
        RunnableMap(
            {
                "context": lambda x: retreiver.invoke(x["question"]),
                "question": lambda x: x["question"],
            }
        )
        | prompt
        | LLM
        | output_retreiver
    )

    response = chain.invoke({"question": query})
    return response


plain_prompt_template = """Answer the question based only on the following context:
Question: {Question} 
"""

plain_prompt = ChatPromptTemplate.from_template(template=plain_prompt_template)


def plain_llm(query):
    chain = plain_prompt | LLM | output_retreiver

    response = chain.invoke({"Question": query})

    return response

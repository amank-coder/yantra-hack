from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS, cross_origin

import os
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from typing_extensions import Concatenate
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI

# import speech_recognition as spr
# from googletrans import Translator


app = Flask(__name__)
# CORS(app, support_credentials=True)
CORS(app)
# CORS(app)
# CORS(app, origins='http://localhost:5173', methods=['POST'], headers=['Content-Type'])

# Dummy transcript data
transcript1 = """The data collection process for a data science project at Lake Agriculture involves several options, including using ready-made data, annotating images manually, or web scraping. In this project, the decision was made to use a pre-existing dataset from KGLE focusing on tomato plant disease classification. The dataset includes images categorized into three directories: early blight, late blight, and healthy plants. The initial step involved downloading and organizing the dataset into the project directory.

TensorFlow's dataset API was utilized to load the images into a TensorFlow dataset. The dataset was then split into training, validation, and test sets using a custom function that allows for flexible split ratios. The training set comprised 80% of the data, while the remaining 20% was evenly split between validation and test sets.

Pre-processing steps were applied to the dataset to prepare it for model training. This included resizing all images to 256x256 pixels and rescaling pixel values to a range between 0 and 1. Additionally, data augmentation techniques such as random flipping and rotation were implemented to increase the robustness of the model.

All pre-processing steps were encapsulated into TensorFlow layers, ensuring seamless integration into the model architecture. These layers included resizing, rescaling, and data augmentation layers, which would be incorporated into the subsequent model construction phase.

The project emphasized the importance of efficient data handling through TensorFlow's dataset API, ensuring scalability and performance during model training. Furthermore, the pre-processing steps laid the groundwork for building a robust classification model capable of accurately identifying tomato plant diseases."""

transcript2="""The project aims to guide users in creating production-grade applications by incorporating a vector search database. This facilitates efficient handling of large text data, converting them into embeddings or vectors. The process involves reading a PDF document, splitting it into chunks, converting them into vectors using OpenAI embeddings, and storing them in a vector search DB like Pinecone. The environment setup includes creating a separate environment and installing required libraries. The code implements functions for reading the document, splitting it, and converting it into vectors. Additionally, it loads environment variables and necessary libraries like OpenAI and Lanchain. It also focuses on creating a robust application with a vector search database, enabling efficient handling of text data. Initially, the PDF document is read, followed by division into chunks due to token size restrictions. OpenAI embeddings are utilized to convert these chunks into vectors, which are then stored in a vector search database like Pinecone. The setup involves creating a separate environment and installing necessary libraries. Retrieving answers involves querying the vector database using cosine similarity, with the retrieved results processed through a question-answering model. The resulting application allows querying of the document, returning relevant answers based on the vector database. Future extensions include incorporating prompt templating for diverse applications like chatbots, text summarization, or quiz apps. This project elucidates the significance of vector databases in NLP applications, offering practical insights for industry adoption."""

text_splitter=CharacterTextSplitter(
    separator="\n",
    chunk_size = 100,
    chunk_overlap = 20,
)
texts1=text_splitter.split_text(transcript1)
texts2=text_splitter.split_text(transcript2)
embeddings= HuggingFaceEmbeddings()
vectorStore_openAI1 = FAISS.from_texts(texts1, embeddings)
vectorStore_openAI2 = FAISS.from_texts(texts2, embeddings)


os.environ["OPENAI_API_KEY"]="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"

chain=load_qa_chain(OpenAI(),chain_type="stuff")

def process_doubt(user_doubt):
    docs1=vectorStore_openAI1.similarity_search(user_doubt)
    answer=chain.run(input_documents=docs1, question=user_doubt)
    return answer

def worthness(user_query):
    docs2=vectorStore_openAI2.similarity_search(user_query)
    answer=chain.run(input_documents=docs2, question=user_query)
    return answer

@app.route('/answer_doubt', methods=['POST'])
def answer_doubt():
    user_doubt = request.json.get('doubt')
    response = process_doubt(user_doubt)
    return jsonify({"answer": response})

@app.route('/discription', methods=['GET'])
def discription():
    user_query1 = "provide tech stack discussed"
    user_query2 = "what are the topic covered"
    user_query3 = "is project discussed yes or no"
    response1 = worthness(user_query1)
    response2 = worthness(user_query2)
    response3 = worthness(user_query3)

    return jsonify({
        "response1": response1,
        "response2": response2,
        "response3": response3
    })

@app.route('/worth', methods=['POST'])
def worth():
    user_query = request.json.get('query')
    response = worthness(user_query)

    return jsonify({"answer": response})



if __name__ == '__main__':
    app.run(debug=True)

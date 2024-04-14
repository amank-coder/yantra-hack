from flask import Flask, request, jsonify
import openai
from transformers import pipeline
from flask_cors import CORS, cross_origin
import os
from googletrans import Translator
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from typing_extensions import Concatenate
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI

app = Flask(__name__)

CORS(app)

video_path='/KfnhNlD8WZI.mp4'
video_name = os.path.splitext(os.path.basename(video_path))[0]
with open(f'D:/yantra/transcript/{video_name}.txt', 'r') as file:
    file_content = file.read()

text_splitter=CharacterTextSplitter(
    separator="\n",
    chunk_size = 100,
    chunk_overlap = 20,
)

texts=text_splitter.split_text(file_content)
embeddings= HuggingFaceEmbeddings()
vectorStore_openAI = FAISS.from_texts(texts, embeddings)
os.environ["OPENAI_API_KEY"]="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"
chain=load_qa_chain(OpenAI(),chain_type="stuff")

def worthness(user_query):
    docs=vectorStore_openAI.similarity_search(user_query)
    answer=chain.run(input_documents=docs, question=user_query)
    return answer

def process_doubt(user_doubt):
    docs=vectorStore_openAI.similarity_search(user_doubt)
    answer=chain.run(input_documents=docs, question=user_doubt)
    return answer

def translateintoeng(text, source_lang):
    target_lang='en'
    translator = Translator()
    translated_text = translator.translate(text, src=source_lang, dest=target_lang)
    return translated_text.text

def translateintolang(text, target_lang):
    source_lang='en'
    translator = Translator()
    translated_text = translator.translate(text, src=source_lang, dest=target_lang)
    return translated_text.text

def reviews(review):
    Review = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": f"Provide me summary of these review: {review}. It should showcase the plus and negative points of the course. Maximum word limit 30."}],
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    Reviews=Review.choices[0].message.content.strip()
    return Reviews

@app.route('/discription', methods=['POST'])
def discription():
    user_query1 = "provide tech stack discussed"
    user_query2 = "what are the topic covered"
    user_query3 = "is project discussed yes or no"
    target_lang = request.json.get('target')
    response1 = worthness(user_query1)
    response1 = translateintolang(response1, target_lang)
    response2 = worthness(user_query2)
    response2 = translateintolang(response2, target_lang)
    response3 = worthness(user_query3)
    response3 = translateintolang(response3, target_lang)
    file_path = f"D:/yantra/transcript/{video_name}reviews.txt" 
    with open(file_path, 'r') as file:
        review = file.read()
    review=reviews(review)
    review=translateintolang(review, target_lang) 

    return jsonify({
        "response1": response1, 
        "response2": response2,
        "response3": response3,
        "review": review
    })

@app.route('/worth', methods=['POST'])
def worth():
    target_lang = request.json.get('target')

    source_lang = target_lang
    user_query = request.json.get('query')
    user_query = translateintoeng(user_query, source_lang)
    response = worthness(f'Only provide an overview of the course like its tech stack or topics covered in the course without answering specific questions given by user. Question is:{user_query}')
    answer= translateintolang(response, target_lang)
    return jsonify({"answer": answer})   

@app.route('/answer_doubt', methods=['POST'])
def answer_doubt():
    target_lang = request.json.get('target');
    source_lang = target_lang
    user_doubt = request.json.get('doubt') 
    user_doubt = translateintoeng(user_doubt, source_lang)
    response = process_doubt(user_doubt)
    answer= translateintolang(response, target_lang)
    return jsonify({"answer": answer})

def generate_question(text):
    prompt = "Generate a 4 multiple choice question technical question to check student understanding based on the following course:\n\n" + text + "\n\n. Don't ask beyond the provided content. Question:"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    question=response.choices[0].message.content.strip()
    return question

def check_answer(question, answer, text):
    prompt = "Question: " + question + "\nAnswer: " + answer + "\nText Reference:\n" + text + "\n\nIs this answer correct Yes or No? If no, then provide correct answers "
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return response.choices[0].message.content.strip()
    """if response.choices[0].message.content.strip()== 'yes':
        return True
    else:
        return False"""
@app.route('/test', methods=['GET'])
def test():
    with open('D:/yantra/transcript/ok2s1vV9XW0.txt', 'r') as file:
        text_reference = file.read()
    question = generate_question(text_reference)
    return question;

@app.route('/testans', methods=['POST'])
def checker():
    with open('D:/yantra/transcript/ok2s1vV9XW0.txt', 'r') as file:
        text_reference = file.read()
    student_answer = request.json.get('student_answer')
    question = request.json.get('student_question')

    return check_answer(question, student_answer, text_reference)

if __name__ == '__main__':
    app.run(debug=True)
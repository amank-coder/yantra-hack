from flask import Flask, render_template, request
import whisper
import openai
import soundfile as sf

openai.api_key = "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"  # Replace with your OpenAI API key

app = Flask(__name__)
model = whisper.Whisper.base  # Choose a Whisper model size (base, small, medium, or large)
is_running = False  # Flag to track recording state

@app.route("/")
def index():
    global is_running
    return render_template("index.html", is_running=is_running)

@app.route("/record", methods=["POST"])
def record():
    global is_running
    if not is_running:
        is_running = True

        # Start recording audio (replace with your recording method)
        # This example simulates recording for 5 seconds
        data = sf.blocksread(None, samplerate=16000, channels=1, duration=5)
        audio = data[:, 0].astype(np.float32)

        # Process audio after recording is complete
        process_audio(audio)
        is_running = False

    return "", 204  # Empty response to prevent browser refresh

def process_audio(audio):
    # Transcribe audio using Whisper
    result = model.transcribe(audio)

    # Get detected language
    language = result["language"]

    # Translate to English if necessary
    if language != "en":
        translation = openai.Translation.create(
            source=language, target="en", content=result["text"]
        )
        text = translation["translated_content"]
    else:
        text = result["text"]

    # Display the recognized text (replace with your display method)
    print(f"Recognized text: {text}")

if __name__ == "__main__":
    app.run(debug=True)
import pyaudio
import wave
import os
import pydub
import whisper  # For language detection (consider alternatives if Google Cloud unavailable)

# Set audio parameters
CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100

# Ask the user for the recording duration
RECORD_SECONDS = int(input("Enter the recording duration in seconds: "))

# Ask the user for the file save location
SAVE_LOCATION = r"C:/Users/Aman/Downloads/Recording"

# Initialize PyAudio
p = pyaudio.PyAudio()

# Open audio stream
stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=CHUNK)

print("Start speaking...")

# Create a list to store audio frames
frames = []

# Record audio data
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("Recording finished.")

# Stop and close the stream
stream.stop_stream()
stream.close()
p.terminate()

# Construct the file path
file_path = os.path.join(SAVE_LOCATION, "recorded_audio.wav")

# Save the recorded audio to the specified location
wf = wave.open(file_path, "wb")
wf.setnchannels(CHANNELS)
wf.setsampwidth(p.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b"".join(frames))
wf.close()

print(f"Audio saved to '{file_path}'")

try:
    # Attempt using ffmpeg for audio processing (if installed)
    model = whisper.load_model("base")
    result = model.transcribe(file_path)
    transcript = result["text"]
    print(transcript)
except FileNotFoundError:  # Handle ffmpeg not found
    print("ffmg not found. Trying alternative audio loading (pydub).")
    try:
        # Load audio using pydub (optional, install with pip install pydub)
        audio_file = pydub.AudioSegment.from_wav(file_path)
        audio_data = audio_file.channel_counts * 2 * audio_file.frame_rate * audio_file.sample_width * b''.join(
            frame for frame in audio_file.raw_data
        )
        model = whisper.load_model("base")
        result = model.transcribe(audio_data)
        transcript = result["text"]
        print(transcript)
    except Exception as e:  # Catch any other errors
        print(f"Error during transcription: {e}")



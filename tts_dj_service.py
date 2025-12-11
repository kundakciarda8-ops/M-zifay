from fastapi import FastAPI
from pydantic import BaseModel
import time
app = FastAPI()
class TTSJob(BaseModel):
    text: str
    voice: str = "default"
@app.post("/tts")
def tts(job: TTSJob):
    filename = f"/tmp/tts_{int(time.time())}.mp3"
    return {"status":"ok","url": f"file://{filename}"}

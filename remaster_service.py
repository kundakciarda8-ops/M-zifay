from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import requests, time
app = FastAPI()
class RemasterJob(BaseModel):
    trackId: str
    trackUrl: str = None
    callback: str
@app.post("/remaster")
async def remaster(job: RemasterJob, background_tasks: BackgroundTasks):
    def do_work():
        time.sleep(3)
        remastered = job.trackUrl or f"https://storage.example.com/{job.trackId}_remastered.flac"
        try:
            requests.post(job.callback, json={"status":"done", "remasteredUrl": remastered})
        except Exception as e:
            print("Callback failed:", e)
    background_tasks.add_task(do_work)
    return {"status":"queued"}

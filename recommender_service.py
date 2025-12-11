from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class RecRequest(BaseModel):
    userId: str = None
    recentTracks: list = []
@app.post("/recommend")
def recommend(req: RecRequest):
    return {"recommendations": [{"id":"mock1","score":0.9},{"id":"mock2","score":0.85}]}

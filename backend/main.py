from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://KunitakeHyuga.github.io",
        "http://localhost:5173",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

count = 0


@app.post("/increment")
def increment():
    global count
    count += 1
    return {"count": count}


@app.get("/count")
def get_count():
    return {"count": count}

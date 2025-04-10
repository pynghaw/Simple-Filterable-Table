from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = [
    {"name": "Jason", "age": "5"},
    {"name": "Jake", "age": "10"}
]


@app.get("/api/people")
def get_people(name: str | None = None, age: str | None = None):
    result = data
    if name:
        result = [person for person in result if person["name"].lower().startswith(name.lower())]
    if age:
        result = [person for person in result if person["age"].startswith(age.lower())]
    return result


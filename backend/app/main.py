from fastapi import FastAPI
from app.routes import auth, journal, summary

app = FastAPI()

# Include routes
app.include_router(auth.router)
app.include_router(journal.router)
app.include_router(summary.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Enhanced Mental Health EHR API"}
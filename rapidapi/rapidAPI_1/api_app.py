
# pip install rapidapi

from fastapi import FastAPI 


app = FastAPI()


cool_people = {
    'Jadzia Dax': 'Trill',
    'Julian Bashir': 'Human',
    'Kira Nerys': 'Bajoran',
    'Miles O Brien': 'Human',
    'Elim Garak': 'Cardassian'
}


# endpoint 
@app.get("/cool_people")
def coolest_people():
    return cool_people


# TO RUN FASTAPI, INSTALL  Uvicorn      pip install uvicorn

# uvicorn api_app:app --reload

# http://127.0.0.1:800       /cool_people


# deploy on internet 
# api_endpoint_url = <link>
# right click > RapidAPI Create new request > remove https://

# rapidAPI hub, Add API project
# give a name 
# create project
# add base url
# add endpoint /cool_people
# save 
# view in hub  rapidapi.com/<repo_name>/api/project_name
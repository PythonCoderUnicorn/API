

# from fastapi import FastAPI

# ============= typer is a CLI FastAPI

import typer 

# def main(name: str):
#     print(f"Hello : {name}")




app = typer.Typer()

@app.command()
def hello(name: str):
    print(f"Hello : {name}")

@app.command()
def goodbye(name: str):
    print(f"Bye {name}")






# python3 main.py hello camila
# python3 main.py goodbye camila






# if __name__ == "__main__":
#     typer.run(main)

if __name__ == "__main__":
    app()

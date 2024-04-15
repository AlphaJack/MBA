## Build steps

## Installation

Install [Python](https://www.python.org/downloads/) and [Git](https://git-scm.com/) on your device, then run

```bash
git clone https://github.com/AlphaJack/MBA
cd MBA
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

## Apply changes

```bash
cd MBA
source .venv/bin/activate
python -m mkdocs serve
```

The website should now be visible from <http://127.0.0.1:8000/MBA/>,
and will reflect changes to the source files.

## Save changes

```bash
cd MBA
git add -A
git commit -m "Meaningful changelog"
git push
```

## Publish a new version

```bash
cd MBA
source .venv/bin/activate
python -m mkdocs gh-deploy
```

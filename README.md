# FastAPI Project Template

The REST API template repository for a FastAPI back-end project.

[![Version](https://img.shields.io/badge/version-1.0-brightgreen.svg)](https://pypi.org/project/ad-topic-recommender/)
[![License](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-blue.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Description

This is a template repository for a FastAPI back-end project. It is intended to be used as a starting point for a new project.
It has OAuth2 authentication and JWT token generation. It also has a basic user model and CRUD operations for users.

## Installation

### Prerequisites

- Python 3.8 or higher
- pip 20.0 or higher
- fastapi
- uvicorn
- pydantic
- jose
- passlib
- mysql

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/dilshankarunarathne/secure-fastapi-template.git
```

2. Install the dependencies

```bash
pip install -r requirements.txt
```

3. Create a MySQL database

```bash
mysql -u root -p
```

```sql
CREATE DATABASE fastapi;
```

4. Create a `.env` file in the root directory and add the following environment variables

```bash
MYSQL_USER="your mysql user"
MYSQL_PASSWORD="your mysql password"
MYSQL_HOST="localhost"
MYSQL_DATABASE="fastapi"
MYSQL_PORT=3306
```

5. Run the project

```bash
uvicorn main:app --reload
```

6. Open the local URL in a browser to access the Swagger UI

```bash
http://127.0.0.1:8000/auth/login
```

## Contributing

If you'd like to contribute to this project, please check the contribution guidelines for more information.

## License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]  
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa] 

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Contact Information

For questions or feedback, please contact the author:

- Author: Dilshan M. Karunarathne
- Email: ceo@altier.tech
- Website: [http://altier.tech](http://altier.tech)


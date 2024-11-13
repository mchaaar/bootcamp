# Projet Bootcamp demandé par [Colin Tenaguillo](https://github.com/ColinTenaguillo).

## Bienvenue dans le projet Bootcamp !  
Ce projet est composé d'une API backend utilisant python, django et ninja ainsi que d'un frontend moderne utilisant React/Vite.  

Le backend gère la logique API, le traitement des données et leur persistance.  
Le frontend interagit avec le backend pour une expérience utilisateur réactive et intuitive.  

### Table des Matières

- [Aperçu](#aperçu)
- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [A savoir](#a-savoir)

---

### Aperçu
Le frontend, bien que simple, est pensé pour être facile d'utilisation et assez épuré.  

#### Voici la page de création de la partie:  

![aperçu du site](https://github.com/mchaaar/bootcamp/blob/main/github/createGame.png)  

#### Un autre exemple, la page depuis laquelle on joue:  

![aperçu du site](https://github.com/mchaaar/bootcamp/blob/main/github/playGame.png)  

---

### Pré-requis

- **Node.js** et **npm** (pour le frontend).
- **Python 3.x**, **Django** et **Django Ninja** (pour le backend).
- **Base de données** : SQLite.

---

### Installation

Il n'y a pas besoin de faire tout le setup de sqlite, du venv, des migrations etc, tout a été fait à l'avance.

#### Pour le backend:  

1 - Aller dans le dossier `backend` quand on est dans le dossier `bootcamp`:  
```
cd .\backend\
```

2 - Démarrer le serveur avec la commande:  
```py
python manage.py runserver
```  
*ou*  
```py
py manage.py runserver
```

#### Pour le frontend:  

1 - Aller dans le dossier `frontend` quand on est dans le dossier `bootcamp`:  
```
cd .\frontend\
```

2 - Faire la commande suivante pour installer les packages:  
```
npm install
```

3 - Démarrer le serveur:  
```
npm run dev
```

**Une fois le backend et le frontend en place, vous devrez pouvoir aller sur l'url frontend afin de jouer.**  
[Dans mon cas celle-ci](http://localhost:5173/)

---

### A savoir

Un user superadmin de test existe en backend et vous pouvez l'utiliser via [cette url](http://127.0.0.1:8000/admin/).
```yaml
username: mchar
password: 123
```

Vous pouvez également créer le votre avec cette commande:  
```py
python manage.py createsuperuser
```

---

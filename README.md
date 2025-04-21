# WIK-DPS-TP02

##  Objectif

Ce projet est la suite du TP01, et vise à **dockeriser l’API Express/TypeScript** développée précédemment, en respectant les bonnes pratiques DevOps.  
Les consignes imposaient la création **d’images Docker optimisées**, l’utilisation d’un **utilisateur non-root**, et la réalisation d’un **scan de sécurité**.

---

##  Structure du projet

- `src/` : Code source TypeScript
- `dist/` : Code compilé JavaScript (non versionné)
- `Dockerfile.single` : Image Docker simple en un seul stage
- `Dockerfile.multi` : Image Docker multi-stage (build + exécution)
- `.gitignore` / `.dockerignore` : Fichiers d’exclusion
- `README.md` : Documentation

---

##  Dockerfile en un seul stage (`Dockerfile.single`)

Image Docker optimisée :

- Installation uniquement des dépendances de production
- Utilisation d’un utilisateur non-root (`appuser`)
- Ordre des instructions pensé pour optimiser le cache Docker

###  Build & Run

```bash
docker build -f Dockerfile.single -t tp02-single .
docker run -p 3000:3000 tp02-single
```

---

##  Dockerfile multi-stage (`Dockerfile.multi`)

Image Docker en **deux étapes** :

- **Étape 1 - builder :**
  - Installation des dépendances complètes
  - Compilation du code TypeScript (`tsc`)
- **Étape 2 - runner :**
  - Seules les dépendances de production + `/dist` sont copiées
  - Pas de source `.ts` ni de fichiers inutiles
  - Utilisation d’un utilisateur non-root (`appuser`)

### 🔧 Build & Run

```bash
docker build -f Dockerfile.multi -t tp02-multi .
docker run -p 3000:3000 tp02-multi
```

---

##  Résultat attendu

### Requête :

```bash
curl http://localhost:3000/ping
```

### Réponse JSON :

```json
{
  "headers": {
    "host": "localhost:3000",
    "user-agent": "curl/7.88.1",
    "accept": "*/*"
  }
}
```

---

##  Sécurité : Utilisateur non-root

Les deux images utilisent un utilisateur spécifique pour l'exécution du serveur web :

```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

---

##  Scan de sécurité (Trivy)

### Commande utilisée :

```bash
trivy image tp02-multi
```

### Exemple de résultat :

```
tp02-multi (node:20-alpine)
Total: 0 Critical, 0 High, 2 Medium, 1 Low
```

> Le scan peut également être fait avec `docker scan` ou `clair`.

---

## ⚙ Commandes utiles

### Compilation TypeScript

```bash
npm install
npx tsc
```

### Exécution locale (hors Docker)

```bash
npm run start
```

---

##  Variable d’environnement

L'application utilise une variable pour définir le port d’écoute :

```env
PING_LISTEN_PORT=3000
```

Si elle n’est pas définie, le port 3000 est utilisé par défaut.

---

##  Rendu

-  Dépôt GitHub : [https://github.com/Thibautdbr33/WIK-DPS-TP02](https://github.com/Thibautdbr33/WIK-DPS-TP02)
-  Lien envoyé par mail avec objet : **WIK-DPS-TP02**

---


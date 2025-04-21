
# DevOps TP - API TypeScript

Ce projet est une API simple développée en **TypeScript avec Express**.  
Elle retourne les **headers de la requête** pour `GET /ping` et répond `404` pour toute autre route.

---

##  Installation

### ** Prérequis**
- **Node.js** (v18 ou plus)
- **npm** installé
- **TypeScript** installé (`npm install -g typescript` si besoin)

### ** Installer les dépendances**
Dans le terminal, exécute :  
```bash
npm install
```

---

##  Configuration du port

L’API écoute par défaut sur le **port 3000**.  
Tu peux changer le port avec **une variable d’environnement**.

### **🔹 Option 1 : En ligne de commande**
Lancer l’API sur le **port 4000** :  
```bash
PING_LISTEN_PORT=4000 npx ts-node src/index.ts
```

### **🔹 Option 2 : Fichier `.env`**
1. Créer un fichier `.env` :  
   ```bash
   touch .env
   ```
2. Ajouter cette ligne dans `.env` :  
   ```
   PING_LISTEN_PORT=4000
   ```
3. Exécuter l’API :  
   ```bash
   npx ts-node src/index.ts
   ```

---

##  Lancer l’API

### **🔹 Mode développement (exécution directe en TypeScript)**
```bash
npx ts-node src/index.ts
```

### **🔹 Mode production (compilation TypeScript → JavaScript)**
1. Compiler en JavaScript :
   ```bash
   npx tsc
   ```
2. Exécuter l’API compilée :
   ```bash
   node dist/index.js
   ```

---

##  Tester l’API

### **Tester avec `curl`**
#### ➜ Vérifier que `GET /ping` fonctionne :
```bash
curl -X GET http://localhost:3000/ping
```
**Réponse attendue :**
```json
{
  "headers": { "host": "localhost:3000", ... }
}
```

#### ➜ Vérifier que les autres routes renvoient `404` :
```bash
curl -X GET http://localhost:3000/autre
```
**Réponse :** Vide avec code **404**.

---

## 📜 Structure du projet

```
📂 devops-tp
 ├── 📂 src
 │   ├── index.ts        # Fichier principal de l'API
 ├── 📂 dist             # Fichiers compilés après `tsc`
 ├── .env                # (Optionnel) Fichier de configuration du port
 ├── package.json        # Dépendances et scripts
 ├── tsconfig.json       # Configuration TypeScript
 ├── README.md           # Documentation du projet
```

---

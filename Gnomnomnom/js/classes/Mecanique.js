class Mecanique {
    // Mécanique du jeu
    constructor(bombes, l, h, t) {
            // Paramétrages divers : dimensions, objets, chrono et timers    
            this.l = l; // Largeur de la scène sauvegardée
            this.h = h; // Hauteur de la scène sauvegardée
            this.t = t; // Décompte des secondes qui passent. Le jeu se réinitialise à 0
            this.listeObjets = []; // Liste des objets sur la scène (bombes + streums)
            this.clavierPresse = {}; // Enregistrement des touches de clavier
            this.puis = Date.now(); // Identifier le temps de référence de démarrage

            this.plateau = new Plateau('images/chateau_bg.jpg', this.l, this.h); // Initialisation du plateau

            // Création du héros
            this.heros = new Heros('images/heros.png'); // Instanciation du héros

            // Création du monstre
            this.streum = new Streum('images/monster.png'); // Instanciation du héros

            this.bombes = bombes; // Nombre de bombes à créer

            this.init();

            // Ajouter des sons
            this.musique = new Audio('media/fond_sonore.mp3'); // Musique de fond
            this.musique.play();

            this.youloose = new Audio('media/loose.mp3'); // Une bombe est touchée ou le temps a passé
            this.win = new Audio('media/arg.mp3'); // Monstre attrappé
        }
        // Fonction d'initialisation du jeu
    init() {
            // Calcul des positions des objets    
            this.positionHasard(this.heros);
            this.positionHasard(this.streum);

            this.listeObjets = []; // Initialisation du tableau des listes d'objets
            this.listeObjets.push(this.streum); // On ajoute le streum en premier dans la liste des objets à rendre
            this.ajouteBombes(); // Ajouter des bombes

            // Déclencher le chrono en interval pour rafraîchir le jeu
            this.temps = setInterval(this.chrono, 1000);
        }
        // Créer et répartir des bombes
    ajouteBombes(bombes) {
        for (let i = 0; i < bombes; i++) {
            let b = new Bombe('images/explosion_300.png');
            this.positionHasard(b);
            this.listeObjets.push(b);
        }
    }

    // Créer et positionner des objets
    positionHasard(obj) {
            // envoyer le objets, mobs et héros au hasard dans l'écran
            obj.x = 32 + Math.round(Math.random() * (this.l - 64));
            obj.y = 32 + Math.round(Math.random() * (this.h - 64));
        }
        // Passage de niveau, le héros accélère mais le temps augmente
    levelUp() {
            this.bombes++;
            this.heros.vitesse += 10;
            this.t += 10;
        }
        // Ajouter des bombes en nombre en fonction de la taille du canevas
    ajouteBombes() {
        let bombes_nb = Math.round(this.bombes * this.l / this.h);
        for (let i = 0; i < bombes_nb; i++) {
            // Calcul de la position en fonction de la taille du canvas
            let tmp_x = Math.floor(Math.random() * (32 + this.l - 64));
            let tmp_y = Math.floor(Math.random() * (32 + this.h - 64));
            // Création de bombes
            let b = new Bombe('images/bombe.png', tmp_x, tmp_y);
            this.listeObjets.push(b); // Ajout dans le tableau des objets
        }
    }

    // Test de collisions
    testCollision() {
            // On récupère le tableau des objets
            for (var i = 0; i < this.listeObjets.length; i++) {
                var tmp = this.listeObjets[i];
                if (this.heros.x <= (tmp.x + 32) && tmp.x <= (this.heros.x + 32) && this.heros.y <= (tmp.y + 32) && tmp.y <= (this.heros.y + 32)) {
                    return tmp.nom;
                    break;
                }
            }
        }
        // Mesurer le temps qui passe
    chrono() {
        mecanique.t < 0 ? clearInterval(mecanique.temps) : mecanique.t--;
    }

    // Mise à jour du canvas et des objets animés > cf. go
    update(mod) {
        if (38 in this.clavierPresse) { // Touche vers le haut
            console.log(this.clavierPresse, this.heros.y);
            if (this.heros.y < 0) {
                this.heros.y = this.h;
            } else { this.heros.y -= this.heros.vitesse * mod; }

        }
        if (40 in this.clavierPresse) { // Touche vers le bas
            if (this.heros.y > this.h) {
                this.heros.y = 0;
            } else {
                this.heros.y += this.heros.vitesse * mod;
            }
        }
        if (37 in this.clavierPresse) { // Touche gauche
            if (this.heros.x < 0) {
                this.heros.x = this.l;
            } else {
                this.heros.x -= this.heros.vitesse * mod;
            }
        }
        if (39 in this.clavierPresse) { // Touche droite
            if (this.heros.x > this.l) {
                this.heros.x = 0;
            } else {
                this.heros.x += this.heros.vitesse * mod;
            }
        }
        let tmp_nom = this.testCollision();
        // Tester les collisions sur les objets ajoutés
        if (tmp_nom == "Streum") {
            this.streum.chop++;
            this.win.play();
            this.levelUp();
            this.init();
        } else if (tmp_nom == "Bombe") {
            this.youloose.play();
            this.init();
        };
    };

    // Opérer le rendu du canvas
    rendu() {
        this.plateau.ctx2D.clearRect(0, 0, this.l, this.h);
        // Afficher les objets sur la scène
        this.plateau.afficheObj(this.plateau);
        this.plateau.afficheObj(this.heros);
        // Dessiner le monstre et les bombes
        for (var i = 0; i < this.listeObjets.length; i++) {
            let tmp = this.listeObjets[i];
            this.plateau.afficheObj(tmp); // Affichage du monstre et des bombes
        }
        // Ecrire des textes dans le canvas
        this.plateau.afficheTexte("Vous en avez eu... " + this.streum.chop, 132, 32);
        this.plateau.afficheTexte("Attention, plus que " + this.t + " secondes", this.l - 200, 32);
    };

    // La boucle enclenchée pour mettre à jour le jeu
    go() {
        if (parent.mecanique.t >= 0) {
            let mnt = Date.now();
            let delta = mnt - parent.mecanique.puis;
            parent.mecanique.update(delta / 1000);
            parent.mecanique.rendu();

            parent.mecanique.puis = mnt;

            // Créer une boucle de mise à jour du script pour générer le canvas
            // ATTENTION, la fonction requestAnimationFrame est une fonction globale de window
            // Le routage dans cette fonction doit se faire à partir de la racine (on utilise parent pour faire propre)
            parent.requestAnimationFrame(parent.mecanique.go);
        }
    };
    // Redimensionner le canvas
    redimensionne(l, h) {
        this.l = l;
        this.h = h;
        this.plateau.l = l;
        this.plateau.h = h;
        this.plateau.img.width = l;
        this.plateau.img.height = h;
        console.log(l, h);
    }
}
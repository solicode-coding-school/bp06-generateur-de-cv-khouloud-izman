
        document.getElementById("Profil").addEventListener("click", addProfil);

function addProfil() {
    // Sélectionner le conteneur où ajouter le formulaire
    const contenu1 = document.getElementById("Profil-container");

    // Créer un élément div pour le formulaire de profil
    const profilForm = document.createElement("div");
    profilForm.className = "Profil-form";

    // Ajouter le contenu HTML du formulaire
    profilForm.innerHTML = `
        <label for="bio">Biographie</label>
        <textarea id="bio" name="bio" rows="4" placeholder="Une courte biographie..."></textarea>
            <button class="remove-btn">    <i class="fas fa-trash-alt"></i>
</button>    `;

    // Ajouter un événement pour supprimer ce formulaire
    profilForm.querySelector(".remove-btn").addEventListener("click", () => {
        profilForm.remove();
    });

    // Ajouter le formulaire de profil au conteneur
    contenu1.appendChild(profilForm);
}



        document.getElementById("add-experience").addEventListener("click", addExperience);
        function addExperience() {
        const contenu = document.getElementById("experiences-container");
        
          // Créer un formulaire d'expérience
          const experienceForm = document.createElement("div");
          experienceForm.className = "experience-form";
        
          experienceForm.innerHTML = `
            <label for="fonction">Fonction</label>
            <input type="text" name="fonction" placeholder="par ex. Marketing internet" required>
        
            <label for="employeur">Employeur</label>
            <input type="text" name="employeur" placeholder="par ex. EDF" required>
        
            <label for="localite">Localité</label>
            <input type="text" name="localite" placeholder="par ex. Paris" required>
        
            <label for="date-debut">Depuis</label>
            <select name="mois-debut">
            <option value="mois">Mois</option>
            <option value="janvier">Janvier</option>
              <option value="février">Février</option>
              <option value="mars">Mars</option>
              <option value="avril">Avril</option>
              <option value="mai">Mai</option>
              <option value="juin">Juin</option>
              <option value="juillet">Juillet</option>
              <option value="août">Août</option>
              <option value="septembre">Septembre</option>
              <option value="octobre">Octobre</option>
              <option value="novembre">Novembre</option>
              <option value="décembre">Décembre</option>
            </select>
             <select name="annee-debut">
                    <option>Année</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                    

                  </select>
        
            <label for="date-fin">Jusqu'à</label>
            <select name="mois-fin">
            <option value="mois">Mois</option>
              <option value="janvier">Janvier</option>
              <option value="février">Février</option>
              <option value="mars">Mars</option>
              <option value="avril">Avril</option>
              <option value="mai">Mai</option>
              <option value="juin">Juin</option>
              <option value="juillet">Juillet</option>
              <option value="août">Août</option>
              <option value="septembre">Septembre</option>
              <option value="octobre">Octobre</option>
              <option value="novembre">Novembre</option>
              <option value="décembre">Décembre</option>
            </select>
        <select name="annee-fin">
                    <option>Année</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                    

                  </select>
            <label for="description">Description</label>
            <textarea name="description" rows="4" placeholder="Décrivez votre expérience ici..."></textarea>
        
            <button class="remove-btn">    <i class="fas fa-trash-alt"></i>
</button>
          `;
        
          // Ajouter l'événement pour supprimer une expérience
          experienceForm.querySelector(".remove-btn").addEventListener("click", () => {
            experienceForm.remove();
          });
        
          // Ajouter le formulaire au conteneur
          contenu.appendChild(experienceForm);
        }

        document.getElementById("school").addEventListener("click", addschool);

        function addschool() {
            // Sélectionner le conteneur où ajouter le formulaire
            const contenu2 = document.getElementById("school-container");
        
            // Créer un élément div pour le formulaire
            const schoolForm = document.createElement("div");
            schoolForm.className = "school-form";
        
            // Ajouter le contenu HTML du formulaire
            schoolForm.innerHTML = `
                 <label for="fonction">Formation scolaire</label>
                    <input type="text" name="fonction" placeholder="par ex. Gestion des Entreprises" required>
                
                    <label for="employeur">Etablissement d'enseignement</label>
                    <input type="text" name="employeur" placeholder="par ex. Université de Rabat" required>
                
                    <label for="localite">Localité</label>
                    <input type="text" name="localite" placeholder="par ex. Maroc" required>
                
                    <label for="date-debut">Depuis</label>
                    <select name="mois-debut">
                        <option value="mois">Mois</option>
                      <option value="janvier">Janvier</option>
                      <option value="février">Février</option>
                      <option value="mars">Mars</option>
                      <option value="avril">Avril</option>
                      <option value="mai">Mai</option>
                      <option value="juin">Juin</option>
                      <option value="juillet">Juillet</option>
                      <option value="août">Août</option>
                      <option value="septembre">Septembre</option>
                      <option value="octobre">Octobre</option>
                      <option value="novembre">Novembre</option>
                      <option value="décembre">Décembre</option>
                    </select>
                     <select name="annee-debut">
                            <option>Année</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                          </select>
                
                    <label for="date-fin">Jusqu'à</label>
                    <select name="mois-fin">
                    <option value="mois">Mois</option>
                      <option value="janvier">Janvier</option>
                      <option value="février">Février</option>
                      <option value="mars">Mars</option>
                      <option value="avril">Avril</option>
                      <option value="mai">Mai</option>
                      <option value="juin">Juin</option>
                      <option value="juillet">Juillet</option>
                      <option value="août">Août</option>
                      <option value="septembre">Septembre</option>
                      <option value="octobre">Octobre</option>
                      <option value="novembre">Novembre</option>
                      <option value="décembre">Décembre</option>
                    </select>
                <select name="annee-fin">
                            <option>Année</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                          </select>
                    <label for="description">Description</label>
                    <textarea name="description" rows="4" placeholder="Décrivez votre expérience ici..."></textarea>
                
            <button class="remove-btn">    <i class="fas fa-trash-alt"></i>
</button>                  `;
        
            // Ajouter un événement pour supprimer ce formulaire
            schoolForm.querySelector(".remove-btn").addEventListener("click", () => {
                schoolForm.remove();
            });
        
            // Ajouter le formulaire de profil au conteneur
            contenu2.appendChild(schoolForm);
        }


        
        document.getElementById("com").addEventListener("click", addcom);

function addcom() {
    // Sélectionner le conteneur où ajouter le formulaire
    const contenu3 = document.getElementById("com-container");

    // Créer un élément div pour le formulaire
    const comForm = document.createElement("div");
    comForm.className = "com-form";

    // Ajouter le contenu HTML du formulaire
    comForm.innerHTML = `
        <label for="fonction">Compétence</label>
        <input type="text" name="fonction" placeholder="par ex. Microsoft Word" required>
        
        <label for="niveau">Niveau</label>
        <select name="niveau">
            <option value="Sélectionnez">Sélectionnez</option>
            <option value="Très bon">Très bon</option>
            <option value="Bon">Bon</option>
            <option value="Satisfaisant">Satisfaisant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Débutant">Débutant</option>
        </select>

            <button class="remove-btn">    <i class="fas fa-trash-alt"></i>
</button>    `;

    // Ajouter un événement pour supprimer ce formulaire
    comForm.querySelector(".remove-btn").addEventListener("click", () => {
        comForm.remove();
    });

    // Ajouter le formulaire de commentaire au conteneur
    contenu3.appendChild(comForm);
}


document.getElementById("lan").addEventListener("click", addlan);

function addlan() {
    // Sélectionner le conteneur où ajouter le formulaire
    const contenu4 = document.getElementById("lan-container");

    // Créer un élément div pour le formulaire
    const lanForm = document.createElement("div");
    lanForm.className = "lan-form";

    // Ajouter le contenu HTML du formulaire
    lanForm.innerHTML = `
        <label for="fonction">Langue</label>
        <input type="text" name="fonction" placeholder="par ex.English" required>
        
        <label for="niveau">Niveau</label>
        <select name="niveau">
            <option value="Sélectionnez">Sélectionnez</option>
            <option value="Langue Maternelle">Langue Maternelle</option>
            <option value="Courant">Courant</option>
            <option value="Satisfaisant">Satisfaisant</option>
            <option value="Moyen">Moyen</option>
            <option value="Notions de base">Notions de base</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>


        </select>

            <button class="remove-btn">    <i class="fas fa-trash-alt"></i>
</button>    `;

    // Ajouter un événement pour supprimer ce formulaire
    lanForm.querySelector(".remove-btn").addEventListener("click", () => {
        lanForm.remove();
    });

    // Ajouter le formulaire de commentaire au conteneur
    contenu4.appendChild(lanForm);
}


document.getElementById("loi").addEventListener("click", addloi);

function addloi() {
    // Sélectionner le conteneur où ajouter le formulaire
    const contenu5 = document.getElementById("loi-container");

    // Créer un élément div pour le formulaire
    const loiForm = document.createElement("div");
    loiForm.className = "loi-form";

    // Ajouter le contenu HTML du formulaire
    loiForm.innerHTML = `
        <label for="fonction">Loisirs</label>
        <input type="text" name="fonction" placeholder="par ex.Lecture" required>
        
      

            <button class="remove-btn">    <i class="fas fa-trash-alt"></i>
</button>    `;

    // Ajouter un événement pour supprimer ce formulaire
    loiForm.querySelector(".remove-btn").addEventListener("click", () => {
        loiForm.remove();
    });

    // Ajouter le formulaire de commentaire au conteneur
    contenu5.appendChild(loiForm);
}

document.getElementById("generate-cv").addEventListener("click", function() {
    // Récupération des valeurs directement avec des valeurs par défaut
    let prenom = document.getElementById("prenom") ? document.getElementById("prenom").value || "Prénom inconnu" : "Prénom inconnu";
    let nom = document.getElementById("nom") ? document.getElementById("nom").value || "Nom inconnu" : "Nom inconnu";
    let email = document.getElementById("email") ? document.getElementById("email").value || "Non spécifié" : "Non spécifié";
    let telephone = document.getElementById("telephone") ? document.getElementById("telephone").value || "Non spécifié" : "Non spécifié";
    let adresse = document.getElementById("adresse") ? document.getElementById("adresse").value || "Non spécifiée" : "Non spécifiée";
    let ville = document.getElementById("ville") ? document.getElementById("ville").value || "Ville inconnue" : "Ville inconnue";
    let jour = document.getElementById("jour") ? document.getElementById("jour").value || "--" : "--";
    let mois = document.getElementById("mois") ? document.getElementById("mois").value || "--" : "--";
    let annee = document.getElementById("annee") ? document.getElementById("annee").value || "--" : "--";
    let lieuNaissance = document.getElementById("lieu-naissance") ? document.getElementById("lieu-naissance").value || "Non spécifié" : "Non spécifié";
    let sexe = document.getElementById("sexe") ? document.getElementById("sexe").value || "Non spécifié" : "Non spécifié";
    let permis = document.getElementById("permis") ? document.getElementById("permis").value || "Non spécifié" : "Non spécifié";
    let nationalite = document.getElementById("nationalite") ? document.getElementById("nationalite").value || "Non spécifiée" : "Non spécifiée";
    let bio = document.getElementById("bio") ? document.getElementById("bio").value || "Pas de biographie ajoutée." : "Pas de biographie ajoutée.";

    // Fonction pour récupérer les données de chaque formulaire
    function getFormData(selector, fields) {
        let forms = document.querySelectorAll(selector);
        let data = [];
        for (let i = 0; i < forms.length; i++) {
            let form = forms[i];
            let entry = {};
            for (let j = 0; j < fields.length; j++) {
                let field = fields[j];
                entry[field] = form.querySelector("[name='" + field + "']").value || "Non spécifié";
            }
            data.push(entry);
        }
        return data;
    }

    // Récupération des expériences, formations, compétences, langues et loisirs
    let experiences = getFormData(".experience-form", ["fonction", "employeur", "localite", "description", "mois-debut", "annee-debut", "mois-fin", "annee-fin"]);
    let formations = getFormData(".school-form", ["fonction", "employeur", "localite", "description", "mois-debut", "annee-debut", "mois-fin", "annee-fin"]);
    let competences = getFormData(".com-form", ["fonction", "niveau"]);
    let langues = getFormData(".lan-form", ["fonction", "niveau"]);
    let loisirs = getFormData(".loi-form", ["fonction"]);

    // Génération du CV HTML
    let cvHTML = `
        <div class="cv-container">
            <h1><i class="fas fa-user icon"></i>${prenom} ${nom}</h1>
            <p><i class="fas fa-phone-alt icon"></i>Numéro de Téléphone : ${telephone}</p>
            <p><i class="fas fa-envelope icon"></i>Email : ${email}</p>
            <p><i class="fas fa-map-marker-alt icon"></i>Adresse : ${adresse}  ,  ${ville}</p>
            <p><i class="fas fa-birthday-cake icon"></i>Date de naissance : ${jour} ${mois} ${annee} , à ${lieuNaissance}</p>
            <p><i class="fas fa-venus-mars icon"></i>Sexe : ${sexe}</p>
            <p><i class="fas fa-id-card icon"></i>Nationalité : ${nationalite}</p>
            <p><i class="fas fa-car icon"></i>Permis de conduire : ${permis}</p>
            ${bio ? `<h2 class="section-title"><i class="fas fa-info-circle"></i> Profil</h2><p>${bio}</p>` : ""}
            <h2 class="section-title"><i class="fas fa-briefcase"></i> Expériences</h2><ul>
    `;

    // Ajout des expériences professionnelles
    for (let i = 0; i < experiences.length; i++) {
        let exp = experiences[i];
        cvHTML += `
            <li>
                <strong>${exp.fonction}</strong> chez ${exp.employeur} , ${exp.localite}
                <p>${exp.description}</p>
                <p><strong>Période :</strong> Depuis ${exp["mois-debut"]} ${exp["annee-debut"]} jusqu'à ${exp["mois-fin"]} ${exp["annee-fin"]}</p>
            </li>
        `;
    }
    
    cvHTML += `</ul><h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formations</h2><ul>`;

    // Ajout des formations scolaires
    for (let i = 0; i < formations.length; i++) {
        let form = formations[i];
        cvHTML += `
            <li>
                <strong>${form.fonction}</strong> à ${form.employeur} , ${form.localite}
                <p>${form.description}</p>
                <p><strong>Période :</strong> Depuis ${form["mois-debut"]} ${form["annee-debut"]} jusqu'à ${form["mois-fin"]} ${form["annee-fin"]}</p>
            </li>
        `;
    }
    
    cvHTML += `</ul><h2 class="section-title"><i class="fas fa-tools"></i> Compétences</h2><ul>`;
    
    // Ajout des compétences
    for (let i = 0; i < competences.length; i++) {
        let comp = competences[i];
        cvHTML += `<li>${comp.fonction} <br><strong> Niveau : </strong>${comp.niveau}</li>`;
    }

    cvHTML += `</ul><h2 class="section-title"><i class="fas fa-language"></i> Langues</h2><ul>`;
    
    // Ajout des langues
    for (let i = 0; i < langues.length; i++) {
        let lang = langues[i];
        cvHTML += `<li>${lang.fonction} <br><strong> Niveau : </strong>${lang.niveau}</li>`;
    }

    cvHTML += `</ul><h2 class="section-title"><i class="fas fa-gamepad"></i> Loisirs</h2><ul>`;
    
    // Ajout des loisirs
    for (let i = 0; i < loisirs.length; i++) {
        cvHTML += `<li><strong>  <i class="fas fa-dot-circle"></i></strong> ${loisirs[i].fonction}</li>`;
    }

    cvHTML += `</ul></div>`;

    // Afficher le CV dans la section dédiée
    document.getElementById("cv-display").innerHTML = cvHTML;
});


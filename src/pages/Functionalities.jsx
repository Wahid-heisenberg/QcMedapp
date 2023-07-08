import React from "react";
import styled from "styled-components";
import Question from "../components/Question";
import Functionalite from "../components/Functionalite";
import { ReactComponent as Line } from "../assets/functionaliteline1.svg";
import { ReactComponent as Line2 } from "../assets/functionaliteline2.svg";
import { ReactComponent as Line3 } from "../assets/functionaliteline3.svg";
import { ReactComponent as Line4 } from "../assets/functionaliteline4.svg";
import { ReactComponent as Line5 } from "../assets/functionaliteline5.svg";
import { ReactComponent as Line6 } from "../assets/functionaliteline6.svg";
import med1  from "../assets/med-student-1.jpg";
import med3 from "../assets/med-student-3.jpg";
import  med4 from "../assets/med-student-4.jpg";
import { mobile } from "../../responsive";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 64px;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${mobile({padding:'8px'})}

`;
const FonctionaliteContainer = styled.div`
  display: flex;
  padding: 32px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  z-index: 1;
  >*{
  flex: 1;
  width: 100%;
  height:100% ;
  }
  ${mobile({flexDirection:'column'})}
`;
const FonctionaliteImageContainer = styled.div`
  display: flex;
  padding: 32px;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: relative;
  ${mobile({padding:'16px'})}
`;
const Imgmed= styled.img`
object-fit: cover;
width: 100%;
`;
const Functionalities = () => {
  return (
    <Container id="functionalities">
      <Question question="Fonctionnalités" />

      <FonctionaliteContainer style={{marginTop:"64px"}}>
        <Functionalite
          title="Trois Type de Filtres"
          title1="Qcm peut vous fournir trois type de filtres de questions : "
          text="Selon le niveau ou l’annee de scolaritee qui mieux organize les modules selon le nivrau , "
          text2="Selon le niveau ou l’annee de scolaritee qui mieux organize les modules selon le nivrau , "
          svg={<Line />}
        />
        <FonctionaliteImageContainer>
          <Imgmed src={med4} alt="med picture" />
        </FonctionaliteImageContainer>
      </FonctionaliteContainer>

      <FonctionaliteContainer>
        <FonctionaliteImageContainer>
            <Imgmed src={med3} alt="med picture" />
        </FonctionaliteImageContainer>
        <Functionalite
          title="Précision"
          title1="Qcm peut vous fournir la meilleur revision aux etudiant :"
          text="QcMed a été designée pour que l’étudiant puisse planifier ses session de  révisions et sélectionner les questions selon leur type, leur source, leur annee de scolarite et leur statut. "
          text2="Plus que L’etudiant peut controlee le nombre de question par session"
          svg={<Line2 />}
        />
      </FonctionaliteContainer>

      <FonctionaliteContainer>

        <Functionalite
          title="Système de Tags et notes"
          title1="Qcmed vous offre l’opportunite de sauvegarder vos questions d’une facon tres claire et organisee selon des playlistes et des tags  "
          text="Selon le niveau ou l’annee de scolaritee qui mieux organize les modules selon le nivrau , "
          text3="Plus que tous  vos faute dans chaque module vont ettre sauvgarder dans des playliste speciaux dans l’espace mes fautes "
          text2="On vous offre aussi le systeme de prise de notes pour chaque questions sauvegardant votre reponse quelle que soit sur cette questions et l’opportunite de les revoir apres la revision dans un espace specialisee pour vos notes"
          svg={<Line3 />}
        />
        <FonctionaliteImageContainer>
            <Imgmed src={med1} alt="med picture" />
        </FonctionaliteImageContainer>
      </FonctionaliteContainer>

      <FonctionaliteContainer>
        <FonctionaliteImageContainer>
        <Imgmed src={med3} alt="med picture" />
        </FonctionaliteImageContainer>
        <Functionalite
          title="Statistiques de votre parcours dur Qcmed "
          title1="Les statistiques sont presentee selon deux type statistique detaille et statistique generale "
          text="cette fonction permet aux nos utilisateurs d’analyser leur avancement "
          svg={<Line4 />}
        />
      </FonctionaliteContainer>

      <FonctionaliteContainer>
        <Functionalite
          title="Système de Tags et notes"
          title1="cette fonction permet aux etudiants de surligner les mots clee avec des  couleurs differentes et de eliminer la reponse qu’il pense qu’elle fausse "
          svg={<Line5 />}
        />
        <FonctionaliteImageContainer>
        <Imgmed src={med3} alt="med picture" />
        </FonctionaliteImageContainer>
      </FonctionaliteContainer>
      <FonctionaliteContainer>
        <FonctionaliteImageContainer>
        <Imgmed src={med4} alt="med picture" />
        </FonctionaliteImageContainer>
        <Functionalite
          title="Mode Nuit et Mode revision "
          text="Mode nuit Pour garder la santé des yeux "
          text2="Mode revision permet de blockee tous les notifications des autres siteweb ou applications "
          svg={<Line6 />}
        />
      </FonctionaliteContainer>
    </Container>
  );
};

export default Functionalities;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
let SideBar=(props) => {
    return <>
        <div className="SideBar">
            <div className="img-title">
                <img src={require("../img/letter-b(1).png")} alt="Budget Logo" />
                <h1>My Budget</h1>
            </div>
            <div className="Inputs">
                <input type="number" id="depense" name="depense" onChange={(e)=>props.HandlerDepenses(e)} placeholder="Entrez vos dépenses" />
                <select class="form-select" name="categories" id="categories" onChange={(e)=>props.HandlerCategorie(e)}>
                    <option value={0}>Choisir Type de dépenses</option>
                    <optgroup label="Infrastructure">
                        <option value={11}>Eau</option>
                        <option value={12}>Électricité</option>
                        <option value={13}>Gaz</option>
                        <option value={14}>Internet</option>
                    </optgroup>
                    <optgroup label="Nourriture">
                        <option value={21}>Matières Premaire</option>
                        <option value={22}>légumes</option>
                        <option value={23}>Fruit</option>
                        <option value={24}>Gateau</option>
                        <option value={25}>Boissons</option>
                    </optgroup>
                    <optgroup label="Vêtements">
                        <option value={31}>Short</option>
                        <option value={32}>Chemise</option>
                        <option value={33}>Jacket</option>
                        <option value={34}>Manteau</option>
                        <option value={35}>Chaussures</option>
                        <option value={36}>Sous-Vêtement</option>
                    </optgroup>
                    <optgroup label="Appareils">
                        <option value={41}>Telephone</option>
                        <option value={42}>Ordinateur</option>
                        <option value={43}>Television</option>
                        <option value={44}>Machine laver</option>
                        <option value={45}>Réfrigérateur</option>
                        <option value={46}>Climatiseur</option>
                        <option value={47}>Autre chose</option>
                    </optgroup>
                    <optgroup label="Autres dépenses">
                        <option value={51}>Étude & École</option>
                        <option value={52}>Transport</option>
                        <option value={53}>Voyager</option>
                        <option value={54}>Cadeaux</option>
                        <option value={55}>Restaurants & Cafés</option>
                        <option value={56}>Voiture</option>
                        <option value={57}>impôts</option>
                        <option value={58}>Abonnements</option>
                        <option value={59}>Amendes</option>
                        <option value={60}>Épargne</option>
                        <option value={61}>Versements mensuels</option>
                        <option value={62}>Louer</option>
                    </optgroup>
                </select>
                <button class="btn btn-primary" type="button" id="btn-ajouter" onClick={props.BtnAjouter}>Ajouter</button>
            </div>
        </div>
    </>
}
export default SideBar
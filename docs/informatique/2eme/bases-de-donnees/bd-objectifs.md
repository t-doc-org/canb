% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Bases de données - objectifs d'évaluation

Voici les objectifs évalués pour ce chapitre.

## Gérer et structurer les données

- [ ] Distinguer le stockage, la sauvegarde et l'archivage.
- [ ] Reconnaître des données structurées, semi-structurées et
      non-structurées.
- [ ] Identifier et différencier les formats CSV, XML et JSON.
- [ ] Décrire la structure d'un tableau en termes de lignes (entités) et de
      colonnes (propriétés).

## Bases de données relationnelles

- [ ] Expliquer l'intérêt d'une base de données relationnelle par rapport à
      un tableau unique (problème de redondance).
- [ ] Choisir une clé primaire adaptée (unique et stable), simple ou
      composée.
- [ ] Expliquer le rôle d'une clé étrangère.
- [ ] Modéliser une situation sous forme de schéma relationnel : déterminer
      les tables, leurs colonnes, leur clé primaire et leurs clés
      étrangères, y compris pour une relation plusieurs-à-plusieurs à l'aide
      d'une table de liaison.

## Types de données

- [ ] Choisir le type SQL adapté à une donnée (numérique, texte, date).
- [ ] Expliquer la signification de la valeur `null`.

## Langage SQL

- [ ] Écrire une requête `create table` avec les colonnes et les types
      appropriés.
- [ ] Ajouter les contraintes `not null`, `primary key` (simple ou
      composée) et une valeur par défaut (`default`) lors de la création
      d'une table.
- [ ] Écrire une requête `insert into ... values` pour ajouter une ou
      plusieurs lignes.
- [ ] Écrire une requête `update ... set ... where` pour modifier des
      valeurs selon un critère.
- [ ] Écrire une requête `delete from ... where` pour supprimer des lignes
      selon un critère.
- [ ] Écrire une requête `select` pour afficher tout ou partie des colonnes
      d'une table.
- [ ] Filtrer un résultat avec `where` et les opérateurs de comparaison
      (`=`, `<>`, `<`, `>`, `<=`, `>=`).
- [ ] Combiner plusieurs critères avec `and` / `or`.
- [ ] Filtrer une plage de valeurs avec `between ... and`.
- [ ] Rechercher une chaîne de caractères avec `like` (`%` et `_`).
- [ ] Trier un résultat avec `order by` (`asc` / `desc`).
- [ ] Supprimer les doublons d'un résultat avec `distinct`.
- [ ] Respecter la syntaxe SQL : point-virgule en fin d'instruction,
      apostrophes autour des chaînes de caractères, noms de colonnes sans
      espace ni accent.

## Bonnes pratiques de programmation

- [ ] Concevoir le schéma relationnel (tables, colonnes, clés) avant de
      créer les tables, plutôt que de tout stocker dans un seul tableau, afin
      d'éviter la redondance.
- [ ] Construire une requête SQL étape par étape (d'abord `select *`, puis
      ajouter `where`, `order by`, etc.) plutôt que d'écrire une requête
      complexe d'un coup.
- [ ] Choisir des noms de tables et de colonnes clairs et cohérents, sans
      espace ni accent, pour garder des requêtes lisibles.

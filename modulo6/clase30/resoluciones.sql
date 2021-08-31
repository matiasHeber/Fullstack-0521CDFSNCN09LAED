## Microdesafio 1
select title, name from movies
left join genres
on genres.id = movies.genre_id ;

SELECT title, first_name, last_name FROM episodes
INNER JOIN actor_episode ON episode_id = episodes.id
INNER JOIN actors ON  actor_id = actors.id;

## Microdesafio 2
select distinct first_name, last_name from movies
inner join actor_movie on movie_id = movies.id
inner join actors on actors.id = actor_id
where title like "la guerra de las galaxias%"

## Microdesafio 3
select title, coalesce(name, "No tiene genero") from movies
left join genres on genre_id = genres.id



## Microdesafio 4
select title, datediff(end_date, release_date) as "duración de estreno a final de la serie" from series 

## Microdesafio 5

## parte 1
select *, length(first_name) from actors 
where length(first_name) > 6
order by first_name 

## parte 2
select count(*) as "Cantidad de episodios" from episodes

## parte 3
select series.title, count(seasons.title) as 'Total temporadas' from series
inner join seasons on seasons.serie_id = series.id
group by series.title

## parte 4
select name, count(*) from movies
inner join genres on genre_id = genres.id
group by name
having count(*) >= 3
order by count(*)
